/**
 * Logger types for Cloudflare Sandbox SDK
 *
 * Provides structured, trace-aware logging across Worker, Durable Object, and Container.
 */
/**
 * Log levels (from most to least verbose)
 */
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
