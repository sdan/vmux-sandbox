import { ErrorCode } from './codes';
/**
 * Get actionable suggestion for an error code
 * Used by handlers when enriching ServiceError → ErrorResponse
 */
export declare function getSuggestion(code: ErrorCode, context: Record<string, unknown>): string | undefined;
//# sourceMappingURL=suggestions.d.ts.map