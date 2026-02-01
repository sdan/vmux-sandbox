import { ErrorCode } from './codes';
/**
 * Maps error codes to HTTP status codes
 * Centralized mapping ensures consistency across SDK
 */
export declare const ERROR_STATUS_MAP: Record<ErrorCode, number>;
/**
 * Get HTTP status code for an error code
 * Falls back to 500 for unknown errors
 */
export declare function getHttpStatus(code: ErrorCode): number;
//# sourceMappingURL=status-map.d.ts.map