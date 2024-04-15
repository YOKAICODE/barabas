const copyFonts = () => {
  return app.gulp
    .src(app.path.src.fonts, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "COPY FONTS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.fonts));
};

const copyIcons = () => {
  return app.gulp
    .src(app.path.src.icons, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "COPY icons",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.icons));
};

const copyFavicons = () => {
  return app.gulp
    .src(app.path.src.favicons)
    .pipe(app.gulp.dest(app.path.build.root));
};

export { copyFonts, copyFavicons, copyIcons };
