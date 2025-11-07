import { Badge } from '../ui/badge';
import { CheckCircle2, XCircle, Clock, AlertCircle, Play } from 'lucide-react';

export type JobStatus = 'Successful' | 'Failed' | 'Pending' | 'Running' | 'Stopped' | 'Stopping';

interface JobStatusBadgeProps {
    status: JobStatus;
}

export function JobStatusBadge({ status }: JobStatusBadgeProps) {
    const statusConfig = {
        Successful: {
            variant: 'default' as const,
            icon: CheckCircle2,
            className: 'bg-green-500 hover:bg-green-600',
        },
        Failed: {
            variant: 'destructive' as const,
            icon: XCircle,
            className: '',
        },
        Pending: {
            variant: 'secondary' as const,
            icon: Clock,
            className: '',
        },
        Running: {
            variant: 'default' as const,
            icon: Play,
            className: 'bg-blue-500 hover:bg-blue-600',
        },
        Stopped: {
            variant: 'secondary' as const,
            icon: AlertCircle,
            className: '',
        },
        Stopping: {
            variant: 'secondary' as const,
            icon: AlertCircle,
            className: '',
        },
    };

    const config = statusConfig[status] || statusConfig.Pending;
    const Icon = config.icon;

    return (
        <Badge variant={config.variant} className={config.className}>
            <Icon className="w-3 h-3 mr-1" />
            {status}
        </Badge>
    );
}