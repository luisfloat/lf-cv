export function toCamel(str: string) {
    if(str === undefined) return undefined;
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}