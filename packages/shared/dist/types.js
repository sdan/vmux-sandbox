/**
 * Check if a process status indicates the process has terminated
 */
export function isTerminalStatus(status) {
    return (status === 'completed' ||
        status === 'failed' ||
        status === 'killed' ||
        status === 'error');
}
// Type guards for runtime validation
export function isExecResult(value) {
    return (value &&
        typeof value.success === 'boolean' &&
        typeof value.exitCode === 'number' &&
        typeof value.stdout === 'string' &&
        typeof value.stderr === 'string');
}
export function isProcess(value) {
    return (value &&
        typeof value.id === 'string' &&
        typeof value.command === 'string' &&
        typeof value.status === 'string');
}
export function isProcessStatus(value) {
    return [
        'starting',
        'running',
        'completed',
        'failed',
        'killed',
        'error'
    ].includes(value);
}
/**
 * Get structured exit information from an exit code
 * Exit codes > 128 indicate the process was killed by a signal (128 + signal number)
 */
export function getPtyExitInfo(exitCode) {
    // Common signal mappings (128 + signal number)
    const signalMap = {
        130: { signal: 'SIGINT', reason: 'Interrupted (Ctrl+C)' },
        137: { signal: 'SIGKILL', reason: 'Killed' },
        143: { signal: 'SIGTERM', reason: 'Terminated' },
        131: { signal: 'SIGQUIT', reason: 'Quit' },
        134: { signal: 'SIGABRT', reason: 'Aborted' },
        136: { signal: 'SIGFPE', reason: 'Floating point exception' },
        139: { signal: 'SIGSEGV', reason: 'Segmentation fault' },
        141: { signal: 'SIGPIPE', reason: 'Broken pipe' },
        142: { signal: 'SIGALRM', reason: 'Alarm' },
        129: { signal: 'SIGHUP', reason: 'Hangup' }
    };
    if (exitCode === 0) {
        return { exitCode, reason: 'Exited normally' };
    }
    const signalInfo = signalMap[exitCode];
    if (signalInfo) {
        return { exitCode, signal: signalInfo.signal, reason: signalInfo.reason };
    }
    // Unknown signal (exitCode > 128)
    if (exitCode > 128) {
        const signalNum = exitCode - 128;
        return {
            exitCode,
            signal: `SIG${signalNum}`,
            reason: `Killed by signal ${signalNum}`
        };
    }
    // Non-zero exit without signal
    return { exitCode, reason: `Exited with code ${exitCode}` };
}
// Re-export interpreter types for convenience
export { Execution, ResultImpl } from './interpreter-types';
