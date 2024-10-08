import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

const images = () => {
  return app.gulp
    .src(app.path.src.images, { removeBOM: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.gulp.src(app.path.src.images, { removeBOM: false })
      )
    )
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
    .pipe(
      app.plugins.if(
        app.isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3 /* 0 to 7 */,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.images))

    // The following tasks did not complete: default, <parallel>, images
    // Did you forget to signal async completion?
    // .pipe(app.gulp.src(app.path.src.svg, { removeBOM: false }))
    // .pipe(app.gulp.dest(app.path.build.images))
    
    .pipe(app.plugins.browsersync.stream());
};

export { images };
