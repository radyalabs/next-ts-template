This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install pnpm:
```bash
# using corepack (Node.js ver. > 16.13)
corepack enable
# then
corepack prepare pnpm@8 --activate


# or using npm
npm install -g pnpm
```

Before starting development, install all dependency::

```bash
pnpm install
```

To start the project, you can run:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/Login.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Project Directories

```plain
.
├── .husky/
├── docker/
│   ├── development/
│   │   ├── docker-compose.yml
│   │   └── Dockerfile
│   ├── production/
│   │   ├── docker-compose.yml
│   │   └── Dockerfile
│   └── staging/
│       ├── docker-compose.yml
│       └── Dockerfile
├── node_modules
├── public
├── src/
│   ├── assets/
│   ├── components
│   │   ├── base
│   │   │   ├── Button
│   │   │   │   ├── index.module.scss
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.types.ts
│   │   │   ├── Textfield
│   │   │   │   ├── index.module.scss
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.types.ts
│   │   │   ├── Toaster
│   │   │   │   ├── index.module.scss
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.types.ts
│   │   │   ├── Tooltip
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.types.ts
│   │   │   └── Typography
│   │   │       ├── index.tsx
│   │   │       └── index.types.ts
│   │   ├── icons
│   │   │   ├── ArrowRounded.tsx
│   │   │   ├── Bookmark.tsx
│   │   │   ├── Book.tsx
│   │   │   └── index.ts
│   │   ├── layout
│   │   │   ├── Content
│   │   │   │   ├── index.hooks.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.types.ts
│   │   │   ├── Footer
│   │   │   │   └── index.tsx
│   │   │   ├── Header
│   │   │   │   ├── index.hooks.ts
│   │   │   │   └── index.tsx
│   │   │   ├── Layout
│   │   │   │   └── index.tsx
│   │   │   └── Sidebar
│   │   │       ├── index.hooks.ts
│   │   │       └── index.tsx
│   │   └── ui
│   │       └── DataTable
│   │           ├── index.hooks.ts
│   │           ├── index.tsx
│   │           └── index.types.ts
│   ├── constants
│   │   ├── apiURL.ts
│   │   ├── config.ts
│   │   ├── httpCode.ts
│   │   └── tables.ts
│   ├── contexts
│   │   ├── AuthContext
│   │   │   ├── AuthContext.tsx
│   │   │   └── AuthContext.types.ts
│   │   └── LayoutContext
│   │       ├── LayoutContext.tsx
│   │       └── LayoutContext.types.ts
│   ├── helpers
│   │   ├── createColumnData.ts
│   │   ├── fetcher.ts
│   │   ├── index.ts
│   │   └── updateURLQuery.ts
│   ├── hooks
│   │   ├── useGetData.ts
│   │   ├── useMutateData.ts
│   │   └── useToaster.ts
│   ├── pages
│   │   ├── api
│   │   │   ├── auth
│   │   │   └── hello.ts
│   │   ├── _app.tsx
│   │   ├── dashboard
│   │   │   └── index.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── login
│   │       └── index.tsx
│   ├── styles
│   │   └── globals.css
│   ├── types
│   │   ├── fetcherProps.ts
│   │   ├── forms.ts
│   │   ├── queries.ts
│   │   ├── responses.ts
│   │   └── tables.ts
│   ├── utils
│   │   ├── createQueryParams.ts
│   │   ├── index.ts
│   │   ├── noop.ts
│   │   ├── slugToTitle.ts
│   │   └── toTitleCase.ts
│   └── views/
│       ├── Dashboard/
│       │   ├── Dashboard.hooks.ts
│       │   ├── Dashboard.tsx
│       │   └── index.ts
│       ├── UserManagement/
│       │   ├── normalizers/
│       │   │   ├── applicationScopesNormalizer.ts
│       │   │   └── userNormalizer.ts
│       │   ├── types/
│       │   │   └── applicationScope.ts
│       │   ├── UserManagementList/
│       │   │   ├── index.ts
│       │   │   ├── UserManagementList.constants.ts
│       │   │   ├── UserManagementList.hooks.ts
│       │   │   ├── UserManagementList.tsx
│       │   │   └── UserManagementList.types.ts
│       │   └── UserManagementDetail/
│       │       ├── components/
│       │       │   └── UserDetailSkeleton
│       │       │       ├── index.ts
│       │       │       └── UserDetailSkeleton.tsx
│       │       ├── index.ts
│       │       ├── UserManagementDetail.hooks.ts
│       │       └── UserManagementDetail.tsx
│       └── Login/
│           ├── index.ts
│           ├── Login.helpers.ts
│           ├── Login.hooks.ts
│           ├── Login.tsx
│           └── Login.types.ts
├── .commitlintrc.json
├── .dockerignore
├── .env.development
├── .env.staging
├── .env.production
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── DOCUMENTATION.md
├── Makefile
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── svg-template.js
├── svgr-config.json
├── tailwind.config.js
└── tsconfig.json
```
