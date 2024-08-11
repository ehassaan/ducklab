

export function quoteSquare(field: string) {
    return `[${field}]`
}

export function quoteDouble(field: string) {
    return `"${field}"`;
}

export function quoteSingle(field: string) {
    return `'${field}'`
}

export function encloseParenthesis(query: string) {
    return `(${query})`;
}
