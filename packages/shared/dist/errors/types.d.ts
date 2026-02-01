import type { ErrorCode } from './codes';
/**
 * Standard operation types
 */
export declare const Operation: {
    readonly FILE_READ: "file.read";
    readonly FILE_WRITE: "file.write";
    readonly FILE_DELETE: "file.delete";
    readonly FILE_MOVE: "file.move";
    readonly FILE_RENAME: "file.rename";
    readonly FILE_STAT: "file.stat";
    readonly DIRECTORY_CREATE: "directory.create";
    readonly DIRECTORY_LIST: "directory.list";
    readonly COMMAND_EXECUTE: "command.execute";
    readonly COMMAND_STREAM: "command.stream";
    readonly PROCESS_START: "process.start";
    readonly PROCESS_KILL: "process.kill";
    readonly PROCESS_LIST: "process.list";
    readonly PROCESS_GET: "process.get";
    readonly PROCESS_LOGS: "process.logs";
    readonly PORT_EXPOSE: "port.expose";
    readonly PORT_UNEXPOSE: "port.unexpose";
    readonly PORT_LIST: "port.list";
    readonly PORT_PROXY: "port.proxy";
    readonly GIT_CLONE: "git.clone";
    readonly GIT_CHECKOUT: "git.checkout";
    readonly GIT_OPERATION: "git.operation";
    readonly CODE_EXECUTE: "code.execute";
    readonly CODE_CONTEXT_CREATE: "code.context.create";
    readonly CODE_CONTEXT_DELETE: "code.context.delete";
};
export type OperationType = (typeof Operation)[keyof typeof Operation];
/**
 * Standard error response format with generic context type
 * TContext allows type-safe access to error-specific context
 */
export interface ErrorResponse<TContext = Record<string, unknown>> {
    /**
     * Error type code (machine-readable)
     */
    code: ErrorCode;
    /**
     * Human-readable error message
     */
    message: string;
    /**
     * Operation that was attempted (useful for debugging and logging)
     */
    operation?: OperationType;
    /**
     * Structured error context with relevant details
     * Type varies based on error code
     */
    context: TContext;
    /**
     * HTTP status code (for client SDK)
     */
    httpStatus: number;
    /**
     * Timestamp when error occurred
     */
    timestamp: string;
    /**
     * Actionable suggestion for fixing the error
     */
    suggestion?: string;
    /**
     * Link to documentation
     */
    documentation?: string;
}
/**
 * Container ServiceError (lightweight, enriched by handlers)
 */
export interface ServiceError {
    message: string;
    code: ErrorCode;
    details?: Record<string, unknown>;
}
/**
 * ServiceResult type for container services
 */
export type ServiceResult<T> = {
    success: true;
    data: T;
} | {
    success: false;
    error: ServiceError;
};
//# sourceMappingURL=types.d.ts.map