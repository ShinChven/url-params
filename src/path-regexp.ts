import {convertTypes} from './convert-types';

import {pathToRegexp} from 'path-to-regexp';

/**
 * match path with pattern, and return params map.
 * @param {string} pattern pattern for your path.
 * @param {string} path your path to match the pattern
 * return {object}
 * @param typing
 */
export function pathToEgexpParams<T>({
                                 pattern,
                                 path,
                                 typing = {},
                             }: { pattern: string, path: string, typing?: Record<string, 'boolean' | 'number'> }) {
    try {
        const result = pathToRegexp(pattern).exec(path) as Array<string>;
        const keys = pattern
            .split('/')
            .filter(name => name.indexOf(':') === 0)
            .map(name => name.replace(':', '')) as Array<string>;
        const params:Record<string, any> = {};
        for (let i = 1; i <= keys.length; i++) {
            params[keys[i - 1]] = result[i];
        }
        return convertTypes(params, typing) as T;
    } catch (err) {
        // do nothing
    }
    return undefined;
}

