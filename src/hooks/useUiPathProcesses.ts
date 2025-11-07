import { useQuery, useMutation, useQueryClient, UseQueryResult, UseMutationResult } from '@tanstack/react-query';
import { uipath } from '../lib/uipath';
import { toast } from 'sonner';
import type { ProcessGetResponse, ProcessStartResponse } from '@uipath/uipath-typescript';

/**
 * Fetch all UiPath processes
 */
export function useUiPathProcesses(folderId?: number, enabled = true): UseQueryResult<ProcessGetResponse[], Error> {
    return useQuery({
        queryKey: ['uipath', 'processes', folderId],
        queryFn: async (): Promise<ProcessGetResponse[]> => {
            try {
                const result = await uipath.processes.getAll(
                    folderId ? { folderId } : undefined
                );
                if (Array.isArray(result)) {
                    return result;
                }
                return (result as any).items || [];
            } catch (error) {
                console.error('Failed to fetch processes:', error);
                throw error;
            }
        },
        refetchInterval: 30000,
        enabled,
    });
}

/**
 * Get a specific process by ID
 */
export function useUiPathProcess(processId: number | undefined, folderId: number): UseQueryResult<ProcessGetResponse, Error> {
    return useQuery({
        queryKey: ['uipath', 'processes', processId, folderId],
        queryFn: async (): Promise<ProcessGetResponse> => {
            if (!processId) throw new Error('Process ID is required');
            return await uipath.processes.getById(processId, folderId);
        },
        enabled: !!processId,
    });
}

/**
 * Mutation to start a UiPath process
 */
export function useStartProcess(): UseMutationResult<ProcessStartResponse[], Error, { processKey: string; folderId: number }> {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            processKey,
            folderId,
        }: {
            processKey: string;
            folderId: number;
        }): Promise<ProcessStartResponse[]> => {
            return await uipath.processes.start({ processKey }, folderId);
        },
        onSuccess: () => {
            toast.success('Process started successfully');
            queryClient.invalidateQueries({ queryKey: ['uipath', 'processes'] });
        },
        onError: (error: Error) => {
            toast.error(`Failed to start process: ${error.message}`);
        },
    });
}