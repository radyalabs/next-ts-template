# Next Base Project Documentation

Description
===========

Base project ini dibuat menggunakan create-next-app.

Base project ini digunakan untuk mengerjakan project dengan framework Next.js.

Folder Structure
================

Struktur folder disini mengacu
pada [Delightful React File/Directory Structure (joshwcomeau.com)](https://www.joshwcomeau.com/react/file-structure/)
dengan harapan dapat membuat struktur projek jadi lebih rapi dengan memisah-misahkan file yang dipergunakan untuk local
component dan global component.

Pada setiap component juga diberlakukan pemisahan file berdasarkan fungsinya, contoh Sidebar disitu ada SIdebar.tsx,
index.hooks.ts, Sidebar.types.ts. Dimana index.tsx berisi view dari component tsb. logic business disimpan di
index.hooks.ts dan type atau interface yg digunakan component tsb ada di Sidebar.types.ts.

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
│   │   │   ├── index.ts
│   │   │   ├── index.types.ts
│   │   │   ├── NavChevron
│   │   │   │   ├── NavChevron.tsx
│   │   │   │   └── NavChevron.types.ts
│   │   │   └── Spinner.tsx
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
│   │   │       ├── index.hooks.tsx
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
│   │   │   ├── index.tsx
│   │   │   └── index.types.ts
│   │   ├── LayoutContext
│   │   │   ├── index.tsx
│   │   │   └── index.types.ts
│   │   └── ToasterContext
│   │       ├── index.tsx
│   │       └── index.types.ts
│   ├── helpers
│   │   ├── createColumnData.ts
│   │   ├── fetcher.ts
│   │   ├── index.ts
│   │   └── updateURLQuery.ts
│   ├── hooks
│   │   ├── useGetData.ts
│   │   └── useMutateData.ts
│   ├── pages
│   │   ├── api
│   │   │   ├── auth
│   │   │   └── hello.ts
│   │   ├── _app.tsx
│   │   ├── crud-example
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
```

Root
----

Di dalam directory root ada beberapa file config dan [README.md](http://README.md) file.

* .commitlintrc.json: Digunakan untuk menyimpan konfigurasi lint pada saat commit
* .dockerignore: Berisi list file yang akan di ignore pada saat pembuatan image docker
* .env.*: Digunakan untuk menyimpan credential dan/atau info environment dengan format key-value. File env untuk 
   setiap environtments di bedakan dengan format env.[environment name]
* .eslintignore: Berisi list file yang akan di ignore oleh eslint
* .eslintrc.json: Berisi konfigurasi linting untuk project
* .gitignore: Berisi list file yang akan di ignore oleh git
* [DOCUMENTATION.md](http://DOCUMENTATION.md): dokumentasi untuk base project ini
* Makefile: Berisi command-command yang akan digunakan saat development
* package.json, pnpm-lock.yaml: berisi library-library yg di gunakan di project. Harap di diskusikan dulu jika ingin
  menambahkan library selain yang di rekomendasikan.
* postcss.config.cjs, tailwind.config.cjs: config dari tailwind, jika ingin setup theme di project anda bisa extend
  theme di tailwind.config.cjs
* [README.md](http://README.md) berisi cara untuk setup dan run project
* tsconfig.json: Berisi config untuk typescript compiler

Assets
------

Sesuai Namanya, asset-asset project di simpan di directory ini

Components
----------

Directory ini berisi komponen-komponen yang di gunakan secara global. Di directory ini ada subdirectory base, icons,
layout, ui.

Setiap komponen dibuat di dalam subdirectory dengan nama komponen tersebut kecuali icons.

Di dalam setiap folder komponen berisi file-file yang dibutuhkan tersebut seperti types, hooks, constants, helpers, dll.

File tersebut diberi nama dengan format index.\[tipe file\].\[ts/tsx\], contoh Button.helpers.ts.

### Base

Berisi komponen terkecil yang digunakan secara global contohnya: button, input, select, dll.

### UI

Berisi komponen yang terdiri dari gabungan 2 atau lebih base component. Contoh komponen. InputSearch yang terdiri dari
komponen Input, search Icon, dan Button.

### Layout

Berisi komponen yang digunakan untuk layout, contoh Header, Sidebar, Footer, dll.

### Icons

Berisi komponen-komponen icon. Berbeda dengan direktori-direktori sebelumnya untuk komponen icon tidak perlu membuat
subdirektori. Di dalam directory icons ada file index.ts yang isinya adalah entry point terhadap icon yang ada di
direktori icons. Misal kita mempunyai komponen icon Arrow.tsx dan Chevron.tsx maka di dalam index.ts-nya adalah seperti
dibawah ini:

```typescript
import Arrow from './Arrow';
import Chevron from './Chevron';

export {Arrow, Chevron};
```

Cara import icon dari komponen lain adalah sebagai berikut:

```typescript
import {Arrow} from '@/assets/icons/';
```

Constants
---------

Berisikan file-file constant yang digunakan secara global. Penamaan file constant menggunakan case lowerCamelCase dan
penamaan constant di dalam file tersebut menggunakan UPPER\_SNAKE\_CASE.

Contoh file cityValue.ts dengan isi:

```typescript
export const CITY_DROPDOWN_VALUE = [
  {id: 1, city: 'Bandung'},
  {id: 2, city: 'Jakarta'},
];
```

Contexts
--------

Direktori ini berisi context-context yang akan digunakan di aplikasi. Jika ingin menambahkan context maka bisa membuat
subdirektori di dalam direktori contexts ini, di dalam subdirektori bisa berisi file-file yang digunakan di context
tersebut seperti types, helpers, dll.

Helpers dan Utils
-----------------

Direktori ini berisi method-method yang digunakan secara global. Helpers digunakan untuk menyimpan method-method yang
hanya berlaku di projek tersebut, misal method `getChipColorByStatus` dimana method ini berfungsi untuk me-return warna
chip berdasarkan status. Sedangkan utils berisi method-method yang logicnya bisa digunakan di projek lain,
misalnya `stringToTitlecase` atau `numberToIDR` .

1 file dalam helpers atau utils berisi hanya 1 method saja dengan nama file yang sama dengan nama methodnya. Penamaan
file menggunakan lowerCamelCase.

Entry point dari helpers dan utils adalah index.ts, sehingga jika ingin menggunakan function
dari direktori tersebut maka cara importnya adalah:
```typescript
import { fetcher } from '@/helpers';
import { slugToTitle } from '@/utils';
```

Hooks
-----
Direktori ini berisi custom hooks yang digunakan secara global.
Penamaan file menggunakan lowerCamelCase dengan format use[nama hooks].

Pages
-----
Direktori ini berisi dari routing aplikasi, dimana route/url adalah folder-folder yang
ada dalam halaman pages.
Contoh: direktori page ke halaman login adalah seperti ini:
```plain

│   ├── pages
│   │   └── login
│   │   │   └── index.tsx
```
Maka url ke halaman login adalah [BASE_URL]/login.

Didalam subdirektori tersebut terdiri dari:

index.tsx: berfungsi sebagai entry point terhadap view yang akan digunakan yang ada di folder src/views, 
contoh isi index.tsx sederhananya seperti ini:

```typescript jsx
import Head from 'next/head';
import { APP_TITLE } from '@/constants/config';
import Login from '@/views/Login';

const LoginPage = () => (
  <>
    <Head>
      <title>{`${APP_TITLE} - Login`}</title>
    </Head>
    <Login />
  </>
);

export default LoginPage;
```

Styles
------

Berisikan file-file style yang digunakan secara global. Extension file bisa menggunakan .css atau .scss.

Types
-----

Direktori ini digunakan untuk type-type yang digunakan di projek secara global.

Di dalam directory types ada file index.ts yang isinya adalah entry point terhadap type yang ada di direktori types.

Views
-----
Direktori ini berisi komponen-komponen utama atau halaman pada fitur. Untuk menambahkan komponen dapat membuat
subdirektori bernama komponen tersebut menggunakan UpperCamelCase.

Didalam subdirektori tersebut terdiri dari:

* index.tsx: file ini hanya berisi view dari komponen tanpa ada business logic apapun. Contohnya seperti
ini:

```typescript jsx
import Typography from '@/components/base/Typography';
import Table from '@/components/ui/DataTable';
import useCrudList from '@/views/CrudExample/CrudList/index.hooks';

const CrudList = () => {
  const {
    data,
    isLoading,
    tableColumns,
    queryParams,
    onPageChange,
    onSortChange,
  } = useCrudList();
  return (
    <>
      <Typography
        variant="h5"
        as="h1"
        className="font-bold"
        gutterBottom
      >
        Vehicle List
      </Typography>
      <Table
        data={data?.payload.data || []}
        columns={tableColumns}
        dataRowKey="vehicleId"
        loading={isLoading}
        showPagination
        page={queryParams.page}
        onPageChange={onPageChange}
        onSortChange={onSortChange}
      />
    </>
  );
};

export default CrudList;

```

* index.hooks.ts: file ini berisi dari logic business untuk view dari komponen tersebut. Contoh:

```typescript
const useCrudList = () => {
  /* ...
   insert business logic here
  */
  return {
    data, isLoading, tableColumns, queryParams, onPageChange, onSortChange,
  };
}

export default useCrudList;
```

* Untuk file-file tambahan seperti types, helpers, constants, styles, dll. Bisa membuat file tersebut dengan nama file
  index.\[tipe file\].ts, contohnya CrudList.types.ts.

Coding Convention/Style Guide
=============================

Style guide yang di gunakan di base project ini mengacu pada style guide dari airbnb/javascript dan airbnb/react.

Untuk detailnya bisa mengunjungi link dibawah:

[airbnb/javascript: JavaScript Style Guide (github.com)](https://github.com/airbnb/javascript)

[javascript/react at master · airbnb/javascript · GitHub](https://github.com/airbnb/javascript/tree/master/react).

Selain itu, ada tambahan style guide mengenai urutan import dimana urutan import adalah sebagai berikut:

1. Package dari react dan next
2. Package dari node\_modules
3. Package internal (component, type, dll.)
4. Parent import
5. Import dari folder yang sama
6. Style import

Catatan: jika yang di import adalah types/interfaces maka import menggunakan import type
```typescript
import type { TableColumn } from '@/types/tables';
```
