# factorio-stdlib-types

Typescript declarations for [Factorio-Stdlib](https://github.com/Afforess/Factorio-Stdlib)

## Usage

In order to ensure imports generate with the proper paths/syntax such that factorio will be able to find the stdlib modules at runtime, imports must be written as follows

`Import * as <module> from '__stdlib__/stdlib/<path>'`

Example:

`Import * as Event from '__stdlib__/stdlib/event/event'`

An entry must also be added to `paths` in `tsconfig.json` (requires `baseUrl` to also be set)

```json
{
    "compilerOptions": {
        "paths": {
            "__stdlib__/*": ["node_modules/@types/factorio-stdlib/*"]
        }
    }
}
```