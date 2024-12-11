# 1xdev - platform

Set of platform functionality from the **1xdevelopers** for web development. 

The packages exported here will be used from all the products we create to share core functionality and speed up development.

### Apps and Packages

- `homepage`: The home page app for our tech team
- `lab`: The Next.JS app to test the packages being added

### Monorepo commands

- `pnpm build` - Build all packages and apps
- `pnpm dev` - Start all apps in dev mode.
 - localhost:3000 -> home page
 - localhost:3001 -> lab   
- `pnpm lint` - Lint all packages
- `pnpm test` - Run unit test in all packages
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Running app

### Prerequisits
1. Install NVM
  https://github.com/nvm-sh/nvm
2. Install PNPM
  https://pnpm.io/installation
3. Install Turbo
  https://turbo.build/repo/docs/getting-started/installation#installing-turbo

### Start dev locally
1. Use correct node version
   ```
   nvm use
   ```
2. Install dependencies
```
pnpm i
```
3. Run dev
```
pnpm dev
```

## Versioning and Publishing packages

When a PR is merged the action: [Publish](https://github.com/devxicans/platform/actions/workflows/release.yml) is executed and it will automatically bump the version of any modified package and will publish any package with new versions. This already takes care of peer dependencies.
