# Tailwind Playground

A basic project showcasing [Tailwind](https://tailwindcss.com/) to help you get started.

It's bundled using [Parcel](https://parceljs.org/), which comes with PostCSS and a nice local server and all that [jazz](https://www.youtube.com/watch?v=5WMUYVjJGh0).

## Install dependencies

```
npm install
```

This should install Parcel and Tailwind.

Tailwind is compiled by Parcel as a [PostCSS](https://postcss.org/) plugin, which you can see in `postcss.config.js`. I've also included [autoprefixer](https://github.com/postcss/autoprefixer).

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

[PurgeCSS](https://purgecss.com/) is included by Tailwind by default. Modify which files you'd like PurgeCSS to look at in the `purge` object of `tailwind.config.js`

```json
purge: ["src/**/*.html", "src/**/*.css"],
```

Right now I just have it set up to look at html and css files.

## Run the app locally

You can just use `npm` as a task runner and run the `dev` command, which runs a local server at `http://localhost:1234/` and has a watch, so it automatically compiles any changes.

```
npm run dev
```

You'll notice that the `dev` script in the `package.json` has `NODE_ENV=development`. This builds your css file **without purging it**. This way you have access to all Tailwind classes in the browser so you can play with different class combinations in the dev tools.

## Build the app for production

```
npm run build
```

You'll notice that the `build` script in the `package.json` has `NODE_ENV=production`. This builds the css file and then **purges it** of unused classes.
