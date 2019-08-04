declare function each<T>(this: void, tbl: T[], func: (this: void, element: T) => boolean | void, ...args: any[]): void

export {
    each,
}