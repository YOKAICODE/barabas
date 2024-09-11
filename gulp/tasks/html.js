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
            /* Ulsk */
            ulBarberPrice: dataJson.ulsk.barber.price,
            ulBarberSale: dataJson.ulsk.barber.sale,
            ulTopPrice: dataJson.ulsk.top.price,
            ulTopSale: dataJson.ulsk.top.sale,
            ulPremiumPrice: dataJson.ulsk.premium.price,
            ulPremiumSale: dataJson.ulsk.premium.sale,
            /* Saransk */
            saranskBarberPrice: dataJson.saransk.barber.price,
            saranskBarberSale: dataJson.saransk.barber.sale,
            saranskTopPrice: dataJson.saransk.top.price,
            saranskTopSale: dataJson.saransk.top.sale,
            saranskPremiumPrice: dataJson.saransk.premium.price,
            saranskPremiumSale: dataJson.saransk.premium.sale,
            /* Moscow */
            moscowBarberPrice: dataJson.moscow.barber.price,
            moscowBarberSale: dataJson.moscow.barber.sale,
            moscowTopPrice: dataJson.moscow.top.price,
            moscowTopSale: dataJson.moscow.top.sale,
            moscowPremiumPrice: dataJson.moscow.premium.price,
            moscowPremiumSale: dataJson.moscow.premium.sale,
            /* Cosmetic */
            cosmetic: dataJson.cosmetic,

            /* Other */
            saransk: "Саранск",
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
