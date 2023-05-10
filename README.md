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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Project Directories

```
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
│   ├── components/
│   │   ├── base/
│   │   ├── icons/
│   │   ├── layout/
│   │   └── ui/
│   ├── constants/
│   ├── contexts/
│   ├── helpers/
│   │   └── index.ts
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   │   └── index.ts
│   └── views/
│       ├── CrudExample/
│       │   └── CrudList/
│       │       ├── index.constants.ts
│       │       ├── index.hooks.ts
│       │       ├── index.normalizer.ts
│       │       ├── index.tsx
│       │       └── index.types.ts
│       ├── List/
│       │   ├── index.hooks.ts
│       │   ├── index.tsx
│       │   └── index.types.ts
│       └── Login/
│           ├── index.hooks.ts
│           ├── index.tsx
│           └── index.types.ts
├── .commitlintrc.json
├── .dockerignore
├── .env.development
├── .env.local
├── .env.production
├── .env.staging
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── DOCUMENTATION.md
├── Makefile
├── next.config.js
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.cjs
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```
