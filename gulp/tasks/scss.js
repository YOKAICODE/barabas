import * as dartSass from "sass";
import gulpSass from "gulp-sass";

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import purgeCss from "gulp-purgecss";

const sass = gulpSass(dartSass);

const scss = () => {
  return app.gulp
    .src(app.path.src.scss)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      purgeCss({
        content: [`${app.path.src.htmlPurgeCSS}`, `${app.path.watch.js}`],
        defaultExtractor: (content) => content.match(/[A-z0-9-:\/\.]+/g) || [],
      })
    )
    .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpcss({
          webpClass: ".webp",
          noWebpClass: ".no-webp",
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: true,
        })
      )
    )
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
};

export { scss };
