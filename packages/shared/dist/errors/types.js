/**
 * Standard operation types
 */
export const Operation = {
    // File Operations
    FILE_READ: 'file.read',
    FILE_WRITE: 'file.write',
    FILE_DELETE: 'file.delete',
    FILE_MOVE: 'file.move',
    FILE_RENAME: 'file.rename',
    FILE_STAT: 'file.stat',
    DIRECTORY_CREATE: 'directory.create',
    DIRECTORY_LIST: 'directory.list',
    // Command Operations
    COMMAND_EXECUTE: 'command.execute',
    COMMAND_STREAM: 'command.stream',
    // Process Operations
    PROCESS_START: 'process.start',
    PROCESS_KILL: 'process.kill',
    PROCESS_LIST: 'process.list',
    PROCESS_GET: 'process.get',
    PROCESS_LOGS: 'process.logs',
    // Port Operations
    PORT_EXPOSE: 'port.expose',
    PORT_UNEXPOSE: 'port.unexpose',
    PORT_LIST: 'port.list',
    PORT_PROXY: 'port.proxy',
    // Git Operations
    GIT_CLONE: 'git.clone',
    GIT_CHECKOUT: 'git.checkout',
    GIT_OPERATION: 'git.operation',
    // Code Interpreter
    CODE_EXECUTE: 'code.execute',
    CODE_CONTEXT_CREATE: 'code.context.create',
    CODE_CONTEXT_DELETE: 'code.context.delete'
};
