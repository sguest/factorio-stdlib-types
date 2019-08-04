declare function register(this: void, eventType: defines.events, callback: (this: void, event: event) => void): void
declare function set_protected_mode(this: void, bool: boolean): void

export {
    register,
    set_protected_mode
}