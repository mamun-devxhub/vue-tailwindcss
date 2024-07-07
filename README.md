# @dxh/vue-tailwindcss

Install tailwindcss to vue3 with single command

## Uses

### Install Tailwind CSS with this Package

Just use the below command to install TaiwindCSS with all its dipendencies.

```sh
npm i -D @mdxh/vue-tailwindcss@latest
```

This command will install `tailwindcss`, `postcss`, `autoprefixer` automatically.

### Generate configuration file

You can use below command to generate `postcss.cofig.js` and `tailwind.config.js` automatically.

```sh
npx tailwindcss init -p
```

To update configaration file see [TailwindCSS Installation](https://tailwindcss.com/docs/installation).

### Add Tailwind to your PostCSS configuration

Create or Update `postcss.cofig.js` with the following configurnation...

```sh
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Add tailwind.config.ts configuration file

Create or Update `tailwind.config.ts` with the following configurnation...

```sh
/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

### Add the Tailwind directives to your main CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your main.css file.

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start your project

```sh
npm run dev
```

## TailwindCSS Documentation

See [TailwindCSS Documentation](https://tailwindcss.com/).
