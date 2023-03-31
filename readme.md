# Weber

Social network, one of in-house FSD examples

[![Feature-Sliced Design][shields-fsd-image]](https://feature-sliced.design/)

# Tech stack

Node.js, Typescript

Monorepo management

- Yarn
- Nx and Lerna

Code quality

- ESLint
- Jest
- Prettier
- Commitlint and husky

[Frontend](./packages/frontend)

- React 
- Effector family (effector, patronum, atomic-router, farfetched)
- Vite

[Backend](./packages/backend)

- Nest
- Prisma

[UI kit](./packages/ui)

- ???
- Rollup

# Getting started

Prerequisites

- Node.js 18
- Yarn v1

[Commands](./package.json)

| Command        | Action                                          |
|----------------|-------------------------------------------------|
| `yarn install` | Install dependencies and link monorepo packages |
| `yarn develop` | Start local dev server                          |
| `yarn format`  | Reformat code                                   |
| `yarn lint`    | Lint code                                       |
| `yarn test`    | Run test cases                                  |
| `yarn build`   | Build project                                   |
| `yarn serve`   | Preview build locally                           |
| `yarn clean`   | Cleanup temporary directories                   |

# Development

...

# License

[MIT license](./license.md)

[shields-fsd-image]: https://img.shields.io/badge/Feature--Sliced-Design-FFF?logoWidth=32&style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7dfhCYMwEAXgd8UBHKHdoCOkI3SEblInaUfoCO0GbtCMkA3i5YeQH2I8OHIB/UAEeaiYx0koMhg6wVjHh8eeEVfgD0O0+xKaS0vwEuQHIvLQFGUclDUxiG6C/AhlqQNPGDrmQOrAA4Y61BV4jnzyC7U74PkFLvmFJjowoJ6AhRf4YruRP2FYC/CK9ny6zg/k/PrwijIOBSmT5Ys/uiY68Bbkw4aMz+75Q/OijIOyY2NiTroxuRcHi1BagrMg30OZeQknPcrQWNgGlSgAAAAASUVORK5CYII=
