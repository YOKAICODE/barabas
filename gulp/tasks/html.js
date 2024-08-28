import postHtml from "gulp-posthtml";
import postHtmlInclude from "posthtml-include";
import postHtmlExpression from "posthtml-expressions";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import beautify from "gulp-html-beautify";
import htmlnano from "gulp-htmlnano";

// Import Data Json
import dataJson from "../../src/data/data.json" assert { type: "json" };

const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      postHtml([
        postHtmlInclude({ encoding: "utf8", root: app.path.postHtmlRoot }),
        postHtmlExpression({
          locals: {
            barberPrice: dataJson.barber.price,
            barberSale: dataJson.barber.sale,
            topPrice: dataJson.top.price,
            topSale: dataJson.top.sale,
            premiumPrice: dataJson.premium.price,
            premiumSale: dataJson.premium.sale,
            cosmetic: dataJson.cosmetic,
          },
        }),
      ])
    )
    .pipe(app.plugins.replace(/@img\//g, "img/"))
    .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js"],
          },
          output: {
            file: "gulp/version.json",
          },
        })
      )
    )
    .pipe(
      app.plugins.if(
        !app.isBuild,
        beautify({
          indent_size: 2,
          indent_char: "",
          wrap_line_length: 130,
          wrap_attributes: "auto",
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        htmlnano({
          removeComments: "all",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};

export { html };
