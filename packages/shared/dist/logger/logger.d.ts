/**
 * Logger implementation
 */
import type { LogContext, Logger, LogLevel } from './types.js';
/**
 * CloudflareLogger implements structured logging with support for
 * both JSON output (production) and pretty printing (development).
 */
export declare class CloudflareLogger implements Logger {
    private readonly baseContext;
    private readonly minLevel;
    private readonly pretty;
    /**
     * Create a new CloudflareLogger
     *
     * @param baseContext Base context included in all log entries
     * @param minLevel Minimum log level to output (default: INFO)
     * @param pretty Enable pretty printing for human-readable output (default: false)
     */
    constructor(baseContext: LogContext, minLevel?: LogLevel, pretty?: boolean);
    /**
     * Log debug-level message
     */
    debug(message: string, context?: Partial<LogContext>): void;
    /**
     * Log info-level message
     */
    info(message: string, context?: Partial<LogContext>): void;
    /**
     * Log warning-level message
     */
    warn(message: string, context?: Partial<LogContext>): void;
    /**
     * Log error-level message
     */
    error(message: string, error?: Error, context?: Partial<LogContext>): void;
    /**
     * Create a child logger with additional context
     */
    child(context: Partial<LogContext>): Logger;
    /**
     * Check if a log level should be output
     */
    private shouldLog;
    /**
     * Build log data object
     */
    private buildLogData;
    /**
     * Output log data to console (pretty or JSON)
     */
    private output;
    /**
     * Output as JSON (production)
     */
    private outputJson;
    /**
     * Output as pretty-printed, colored text (development)
     *
     * Format: LEVEL [component] message (trace: tr_...) {context}
     * Example: INFO [sandbox-do] Command started (trace: tr_7f3a9b2c) {commandId: "cmd-123"}
     */
    private outputPretty;
    /**
     * Get ANSI color code for log level
     */
    private getLevelColor;
}
//# sourceMappingURL=logger.d.ts.map