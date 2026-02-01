/**
 * WebSocket transport protocol types
 *
 * Enables multiplexing HTTP-like requests over a single WebSocket connection.
 * This reduces sub-request count when running inside Workers/Durable Objects.
 *
 * Protocol:
 * - Client sends WSRequest messages
 * - Server responds with WSResponse messages (matched by id)
 * - For streaming endpoints, server sends multiple WSStreamChunk messages
 *   followed by a final WSResponse
 */
/**
 * Type guard for WSPtyInput
 */
export function isWSPtyInput(msg) {
    return (typeof msg === 'object' &&
        msg !== null &&
        'type' in msg &&
        msg.type === 'pty_input');
}
/**
 * Type guard for WSPtyResize
 */
export function isWSPtyResize(msg) {
    return (typeof msg === 'object' &&
        msg !== null &&
        'type' in msg &&
        msg.type === 'pty_resize');
}
/**
 * Type guard for WSRequest
 *
 * Note: Only validates the discriminator field (type === 'request').
 * Does not validate other required fields (id, method, path).
 * Use for routing messages; trust TypeScript for field validation.
 */
export function isWSRequest(msg) {
    return (typeof msg === 'object' &&
        msg !== null &&
        'type' in msg &&
        msg.type === 'request');
}
/**
 * Type guard for WSResponse
 *
 * Note: Only validates the discriminator field (type === 'response').
 */
export function isWSResponse(msg) {
    return (typeof msg === 'object' &&
        msg !== null &&
        'type' in msg &&
        msg.type === 'response');
}
/**
 * Type guard for WSStreamChunk
 *
 * Note: Only validates the discriminator field (type === 'stream').
 */
export function isWSStreamChunk(msg) {
    return (typeof msg === 'object' &&
        msg !== null &&
        'type' in msg &&
        msg.type === 'stream');
}
/**
 * Type guard for WSError
 *
 * Note: Only validates the discriminator field (type === 'error').
 */
export function isWSError(msg) {
    return (typeof msg === 'object' &&
        msg !== null &&
        'type' in msg &&
        msg.type === 'error');
}
/**
 * Generate a unique request ID
 */
export function generateRequestId() {
    return `ws_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
}
