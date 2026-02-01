export interface CreateContextOptions {
    /**
     * Programming language for the context
     * @default 'python'
     */
    language?: 'python' | 'javascript' | 'typescript';
    /**
     * Working directory for the context
     * @default '/workspace'
     */
    cwd?: string;
    /**
     * Environment variables for the context.
     * Undefined values are skipped (treated as "not configured").
     */
    envVars?: Record<string, string | undefined>;
    /**
     * Request timeout in milliseconds
     * @default 30000
     */
    timeout?: number;
}
export interface CodeContext {
    /**
     * Unique identifier for the context
     */
    readonly id: string;
    /**
     * Programming language of the context
     */
    readonly language: string;
    /**
     * Current working directory
     */
    readonly cwd: string;
    /**
     * When the context was created
     */
    readonly createdAt: Date;
    /**
     * When the context was last used
     */
    readonly lastUsed: Date;
}
export interface RunCodeOptions {
    /**
     * Context to run the code in. If not provided, uses default context for the language
     */
    context?: CodeContext;
    /**
     * Language to use if context is not provided
     * @default 'python'
     */
    language?: 'python' | 'javascript' | 'typescript';
    /**
     * Environment variables for this execution.
     * Undefined values are skipped (treated as "not configured").
     */
    envVars?: Record<string, string | undefined>;
    /**
     * Execution timeout in milliseconds
     * @default 60000
     */
    timeout?: number;
    /**
     * AbortSignal for cancelling execution
     */
    signal?: AbortSignal;
    /**
     * Callback for stdout output
     */
    onStdout?: (output: OutputMessage) => void | Promise<void>;
    /**
     * Callback for stderr output
     */
    onStderr?: (output: OutputMessage) => void | Promise<void>;
    /**
     * Callback for execution results (charts, tables, etc)
     */
    onResult?: (result: Result) => void | Promise<void>;
    /**
     * Callback for execution errors
     */
    onError?: (error: ExecutionError) => void | Promise<void>;
}
export interface OutputMessage {
    /**
     * The output text
     */
    text: string;
    /**
     * Timestamp of the output
     */
    timestamp: number;
}
export interface Result {
    /**
     * Plain text representation
     */
    text?: string;
    /**
     * HTML representation (tables, formatted output)
     */
    html?: string;
    /**
     * PNG image data (base64 encoded)
     */
    png?: string;
    /**
     * JPEG image data (base64 encoded)
     */
    jpeg?: string;
    /**
     * SVG image data
     */
    svg?: string;
    /**
     * LaTeX representation
     */
    latex?: string;
    /**
     * Markdown representation
     */
    markdown?: string;
    /**
     * JavaScript code to execute
     */
    javascript?: string;
    /**
     * JSON data
     */
    json?: any;
    /**
     * Chart data if the result is a visualization
     */
    chart?: ChartData;
    /**
     * Raw data object
     */
    data?: any;
    /**
     * Available output formats
     */
    formats(): string[];
}
export interface ChartData {
    /**
     * Type of chart
     */
    type: 'line' | 'bar' | 'scatter' | 'pie' | 'histogram' | 'heatmap' | 'unknown';
    /**
     * Chart title
     */
    title?: string;
    /**
     * Chart data (format depends on library)
     */
    data: any;
    /**
     * Chart layout/configuration
     */
    layout?: any;
    /**
     * Additional configuration
     */
    config?: any;
    /**
     * Library that generated the chart
     */
    library?: 'matplotlib' | 'plotly' | 'altair' | 'seaborn' | 'unknown';
    /**
     * Base64 encoded image if available
     */
    image?: string;
}
export interface ExecutionError {
    /**
     * Error name/type (e.g., 'NameError', 'SyntaxError')
     */
    name: string;
    /**
     * Error message
     */
    message: string;
    /**
     * Stack trace
     */
    traceback: string[];
    /**
     * Line number where error occurred
     */
    lineNumber?: number;
}
export interface ExecutionResult {
    code: string;
    logs: {
        stdout: string[];
        stderr: string[];
    };
    error?: ExecutionError;
    executionCount?: number;
    results: Array<{
        text?: string;
        html?: string;
        png?: string;
        jpeg?: string;
        svg?: string;
        latex?: string;
        markdown?: string;
        javascript?: string;
        json?: any;
        chart?: ChartData;
        data?: any;
    }>;
}
export declare class Execution {
    readonly code: string;
    readonly context: CodeContext;
    /**
     * All results from the execution
     */
    results: Result[];
    /**
     * Accumulated stdout and stderr
     */
    logs: {
        stdout: string[];
        stderr: string[];
    };
    /**
     * Execution error if any
     */
    error?: ExecutionError;
    /**
     * Execution count (for interpreter)
     */
    executionCount?: number;
    constructor(code: string, context: CodeContext);
    /**
     * Convert to a plain object for serialization
     */
    toJSON(): ExecutionResult;
}
export declare class ResultImpl implements Result {
    private raw;
    constructor(raw: any);
    get text(): string | undefined;
    get html(): string | undefined;
    get png(): string | undefined;
    get jpeg(): string | undefined;
    get svg(): string | undefined;
    get latex(): string | undefined;
    get markdown(): string | undefined;
    get javascript(): string | undefined;
    get json(): any;
    get chart(): ChartData | undefined;
    get data(): any;
    formats(): string[];
}
//# sourceMappingURL=interpreter-types.d.ts.map