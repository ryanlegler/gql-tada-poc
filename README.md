# Next.js with gql.tada powered types derived from a remote GraphQL endpoint

## Getting Started

### Install dependencies

```bash
yarn
```

Note that in "page.tsx" we use the `useQuery` hook from `@tanstack/react-query` and "data" is typed using the generated types from `gql.tada`.

## Generate types

The types are generated using `gql.tada` and saved in `graphql-env.d.ts`.

### Troubleshooting

Make sure VSCode is using the correct TypeScript version for the plugin to work properly:

1. VSCode must use the TypeScript `tsdk` from `node_modules` as explained in the [gql.tada documentation](https://gql-tada.0no.co/get-started/installation#vscode-setup) We've configured the workspace `settings.json` to use the correct TypeScript `.tsdk` so this should happen automatically.
2. When/If prompted by VSCode, accept using the workspace TypeScript version.

### Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
