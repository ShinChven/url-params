import qs from 'qs';
import {convertTypes, Typing} from './convert-types';

/**
 * Get current queries
 * @returns {T}
 */
export function queryParams<T>({query, typing}: { query: string; typing?: Typing }): T | undefined {
    try {
        let data = qs.parse(query) as Record<string, any>
        if (typing) {
            data = convertTypes(data, typing);
        }
        return data as unknown as T;
    } catch (e) {
    }
    return undefined;
}
