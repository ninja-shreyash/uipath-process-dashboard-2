import { ProcessCard } from '@/components/uipath/ProcessCard';
import { useUiPathProcesses, useStartProcess } from '@/hooks/useUiPathProcesses';
import { AlertCircle, Activity, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/layout/AppLayout';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';

export function HomePage() {
    const { data: processes, isLoading, error, refetch } = useUiPathProcesses(1878866 ? Number('1878866') : undefined);
    const { mutate: startProcess, isPending: isStartingProcess } = useStartProcess();

    const handleStartProcess = (processKey: string) => {
        startProcess({ processKey, folderId: 1878866 ? Number('1878866') : 0 });
    };

    const handleRefresh = () => {
        refetch();
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-background">
                <ThemeToggle />
                <div className="max-w-7xl mx-auto p-6 space-y-6">
                    {/* Header */}
                    <header className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-[#FA4616] flex items-center justify-center">
                                    <Activity className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold">UiPath Process Dashboard</h1>
                                    <p className="text-muted-foreground">
                                        Monitor and manage your UiPath Orchestrator processes
                                    </p>
                                </div>
                            </div>
                            <Button
                                onClick={handleRefresh}
                                variant="outline"
                                disabled={isLoading}
                            >
                                <RefreshCw className={isLoading ? "w-4 h-4 mr-2 animate-spin" : "w-4 h-4 mr-2"} />
                                Refresh
                            </Button>
                        </div>
                    </header>

                    {/* Error Alert */}
                    {error && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>
                                Failed to load processes: {(error as Error).message}
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Process Grid */}
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {processes && processes.length > 0 ? (
                                processes.map((process: any) => (
                                    <ProcessCard
                                        key={process.id}
                                        process={{
                                            id: process.id,
                                            name: process.name,
                                            key: process.key,
                                            description: process.description,
                                        }}
                                        onStart={handleStartProcess}
                                        isStarting={isStartingProcess}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full">
                                    <Alert>
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>No processes found</AlertTitle>
                                        <AlertDescription>
                                            Create processes in UiPath Orchestrator to see them here.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <Toaster richColors closeButton />
            </div>
        </AppLayout>
    );
}