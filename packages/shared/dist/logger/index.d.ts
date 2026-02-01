import type { LogComponent, LogContext, Logger, LogLevel } from './types.js';
export type { Logger, LogContext, LogLevel };
export { CloudflareLogger } from './logger.js';
export { TraceContext } from './trace-context.js';
export { LogLevel as LogLevelEnum } from './types.js';
/**
 * Create a no-op logger for testing
 *
 * Returns a logger that implements the Logger interface but does nothing.
 * Useful for tests that don't need actual logging output.
 *
 * @returns No-op logger instance
 *
 * @example
 * ```typescript
 * // In tests
 * const client = new HttpClient({
 *   baseUrl: 'http://test.com',
 *   logger: createNoOpLogger() // Optional - tests can enable real logging if needed
 * });
 * ```
 */
export declare function createNoOpLogger(): Logger;
/**
 * Create a new logger instance
 *
 * @param context Base context for the logger. Must include 'component'.
 *                TraceId will be auto-generated if not provided.
 * @returns New logger instance
 *
 * @example
 * ```typescript
 * // In Durable Object
 * const logger = createLogger({
 *   component: 'sandbox-do',
 *   traceId: TraceContext.fromHeaders(request.headers) || TraceContext.generate(),
 *   sandboxId: this.id
 * });
 *
 * // In Container
 * const logger = createLogger({
 *   component: 'container',
 *   traceId: TraceContext.fromHeaders(request.headers)!,
 *   sessionId: this.id
 * });
 * ```
 */
export declare function createLogger(context: Partial<LogContext> & {
    component: LogComponent;
}): Logger;
//# sourceMappingURL=index.d.ts.map