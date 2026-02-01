import type { LogContext, Logger } from './logger';
/**
 * Fallback repository name used when URL parsing fails
 */
export declare const FALLBACK_REPO_NAME = "repository";
/**
 * Extract repository name from a Git URL
 *
 * Supports multiple URL formats:
 * - HTTPS: https://github.com/user/repo.git → repo
 * - HTTPS without .git: https://github.com/user/repo → repo
 * - SSH: git@github.com:user/repo.git → repo
 * - GitLab/others: https://gitlab.com/org/project.git → project
 *
 * @param repoUrl - Git repository URL (HTTPS or SSH format)
 * @returns Repository name extracted from URL, or 'repository' as fallback
 */
export declare function extractRepoName(repoUrl: string): string;
/**
 * Redact credentials from URLs for secure logging
 *
 * Replaces any credentials (username:password, tokens, etc.) embedded
 * in URLs with ****** to prevent sensitive data exposure in logs.
 * Works with URLs embedded in text (e.g., "Error: https://token@github.com/repo.git failed")
 *
 * @param text - String that may contain URLs with credentials
 * @returns String with credentials redacted from any URLs
 */
export declare function redactCredentials(text: string): string;
/**
 * Sanitize data by redacting credentials from any strings
 * Recursively processes objects and arrays to ensure credentials are never leaked
 */
export declare function sanitizeGitData<T>(data: T): T;
/**
 * Logger wrapper that automatically sanitizes git credentials
 */
export declare class GitLogger implements Logger {
    private readonly baseLogger;
    constructor(baseLogger: Logger);
    private sanitizeContext;
    private sanitizeError;
    debug(message: string, context?: Partial<LogContext>): void;
    info(message: string, context?: Partial<LogContext>): void;
    warn(message: string, context?: Partial<LogContext>): void;
    error(message: string, error?: Error, context?: Partial<LogContext>): void;
    child(context: Partial<LogContext>): Logger;
}
//# sourceMappingURL=git.d.ts.map