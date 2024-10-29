import { promises as fs } from 'fs';

type ResolvedMap<T> = { [K in keyof T]: T[K] extends PromiseLike<infer U> ? U : T[K] };

export const promiseMap = async <T extends { [key: string]: unknown; }>(
    obj: T,
): Promise<ResolvedMap<T>> => {
    const out: Partial<ResolvedMap<T>> = {};
    await Promise.all(
        Object.keys(obj).map(async key => ((out as { [key: string]: unknown; })[key] = await obj[key])),
    );
    return out as ResolvedMap<T>;
};

export const uniqueBy = <T, R>(
    data: ReadonlyArray<T>,
    extract: (value: T) => R,
): ReadonlyArray<T> => {
    const seen = new Set<R>();
    return data.filter(item => {
        const value = extract(item);
        if (seen.has(value)) {
            return false;
        }

        seen.add(value);
        return true;
    });
};


export const exists = async (path: string) => {
    try {
        await fs.stat(path);
        return true;
    } catch {
        return false;
    }
};