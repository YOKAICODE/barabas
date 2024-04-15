import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

console.log(rootFolder);

const buildFolder = "./dist";
const srcFolder = "./src";

const path = {
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: [`${srcFolder}/**/*.html`],
    tailwindcss: `${srcFolder}/tailwindcss/tailwind.css`,
    fonts: [`${srcFolder}/assets/fonts/*.{eot,woff,woff2,ttf,svg}`],
    icons: [`${srcFolder}/assets/icons/*.{eot,woff,woff2,ttf,svg}`],
    favicons: `${srcFolder}/assets/favicons/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
    scss: [
      `${srcFolder}/scss/**/*.{scss,css}`,
      `${srcFolder}/tailwindcss/**/*.{scss,css}`,
    ],
    html: `${srcFolder}/**/*.html`,
    fonts: `${srcFolder}/assets/fonts/*.*`,
  },
  build: {
    root: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/img/`,
    fonts: `${buildFolder}/assets/fonts/`,
    icons: `${buildFolder}/assets/icons/`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};

export { path };
