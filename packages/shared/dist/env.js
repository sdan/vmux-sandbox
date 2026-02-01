/**
 * Safely extract a string value from an environment object
 *
 * @param env - Environment object with dynamic keys
 * @param key - The environment variable key to access
 * @returns The string value if present and is a string, undefined otherwise
 */
export function getEnvString(env, key) {
    const value = env?.[key];
    return typeof value === 'string' ? value : undefined;
}
/**
 * Filter environment variables object to only include string values.
 * Skips undefined, null, and non-string values.
 *
 * Use this when you only need the defined values (e.g., for per-command env
 * where undefined means "don't override").
 *
 * @param envVars - Object that may contain undefined values
 * @returns Clean object with only string values
 */
export function filterEnvVars(envVars) {
    const filtered = {};
    for (const [key, value] of Object.entries(envVars)) {
        if (value != null && typeof value === 'string') {
            filtered[key] = value;
        }
    }
    return filtered;
}
/**
 * Partition environment variables into values to set and keys to unset.
 *
 * - String values → toSet (will be exported)
 * - undefined/null → toUnset (will be unset)
 *
 * This enables idiomatic JS patterns where undefined means "remove":
 * ```typescript
 * await sandbox.setEnvVars({
 *   API_KEY: 'new-key',        // will be set
 *   OLD_VAR: undefined,        // will be unset
 * });
 * ```
 */
export function partitionEnvVars(envVars) {
    const toSet = {};
    const toUnset = [];
    for (const [key, value] of Object.entries(envVars)) {
        if (value != null && typeof value === 'string') {
            toSet[key] = value;
        }
        else {
            toUnset.push(key);
        }
    }
    return { toSet, toUnset };
}
