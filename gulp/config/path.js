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
    html: [`${srcFolder}/**/*.html`,`!${srcFolder}/html/**/*.*`],
    htmlPurgeCSS:[`${srcFolder}/**/*.html`],
    files: [
      `${srcFolder}/assets/**/*.*`,
      `!${srcFolder}/img/**/*.*`,
      `!${srcFolder}/assets/favicon/*.*`,
      `${srcFolder}/assets/icons/*.*`,
    ],
    tailwindcss: `${srcFolder}/tailwindcss/tailwind.css`,
    favicons: `${srcFolder}/assets/favicon/*.*`,
    icons: `${srcFolder}/assets/icons/*.*`,
  },
  build: {
    root: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/img/`,
    // fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/assets/`,
    icons: `${buildFolder}/assets/icons/`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
    scss: [
      `${srcFolder}/scss/**/*.{scss,css}`,
      `${srcFolder}/tailwindcss/**/*.{scss,css}`,
    ],
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/assets/**/*.*`,
  },
  postHtmlRoot: `${srcFolder}/html`,
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};

export { path };
