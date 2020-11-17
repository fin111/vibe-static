# Vibe static one page holding website 

Was created by following this blog post which can be found on [wweb.dev](https://wweb.dev/blog/how-to-create-static-website-npm-scripts)

It uses:
- SCSS with linting and autoprefixer
- JavaScript with webpack using babel and linting
- minifying images
- html partials and minify with post-html
- browser-sync

The compiled files will go to the directory "/dist"

- from `src/scss` to `dist/index.css`
- from `src/js` to `dist/bundle.js`
- from `src/views` to `dist/`
- from `src/images` to `dist/images`

## Getting Started

1. Install dependencies
```
npm install
```

2. Build resources
```
npm run build
```

3. Watch for changes
```
npm run watch
```


## License
[MIT](https://choosealicense.com/licenses/mit/)


