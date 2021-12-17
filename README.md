# Tailwind Playground

A basic project showcasing [Tailwind](https://tailwindcss.com/) to help you get started.

It's bundled using [Parcel](https://parceljs.org/), which comes with PostCSS and a nice local server and all that [jazz](https://www.youtube.com/watch?v=mqDOQzfM5Kc).

## Install dependencies

```
npm install
```

This should install Parcel and Tailwind.

Tailwind is compiled by Parcel as a [PostCSS](https://postcss.org/) plugin, which you can see in `.postcssrc`. I've also included [autoprefixer](https://github.com/postcss/autoprefixer).

```json
{
  "plugins": {
    "tailwindcss": {},
    "autoprefixer": {}
  }
}
```

[PurgeCSS](https://purgecss.com/) is included by Tailwind by default. Modify which files you'd like PurgeCSS to look at in the `content` object of `tailwind.config.js`. With Tailwind 3.0, this purge is done [just in time](https://tailwindcss.com/blog/just-in-time-the-next-generation-of-tailwind-css), so you won't have every possible class permutation available in the compiled css, just the classes you use.

```js
content: ["src/**/*.html", "src/**/*.css"],
```

Right now I just have it set up to look at html and css files.

Parcel is set to compile `src/index.html` as its input file, which is configured in the `source` object of the `package.json`:

```json
"source": "src/index.html",
```

If you have add other pages of html files in the `src` folder, you can use `*` to specify any file ending in `.html`, in any folder `/**/`, ie:

```json
"source": "src/index.html src/**/*.html",
```

## Run the app locally

You can just use `npm` as a task runner and run the `start` command in your terminal, which runs a local server at `http://localhost:1234/` and has a watch, so it automatically compiles any changes.

```
npm run start

// OR

npm start
```

## Build the app for production

To build the app for production locally, you can just use `npm` as a task runner and run the `build` command in your terminal.

```
npm run build
```

To build the app for production using a CI pipeline or something like [Netlify](https://www.netlify.com/), you'd supply the contents of the `build` script. For example, in Netlify, in your Build & Deploy > Continuous Deployment > Build Settings, you would set your Build command to `parcel build`

### Note: Building before Tailwind 3.0:

If you're using Tailwind before 3.0 and don't have `mode: jit` enabled in your `tailwind.config.js`, you'll need to modify the scripts in the `package.json` to specify the environment so the classes are purged in production but not development, ie:

```json
  "scripts": {
    "start": "NODE_ENV=development parcel",
    "build": "NODE_ENV=production parcel build",
  },
```
