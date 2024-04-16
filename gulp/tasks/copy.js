const copyFiles = () => {
  return app.gulp
    .src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
};

const copyIcons = () => {
  return app.gulp
    .src(app.path.src.icons)
    .pipe(app.gulp.dest(app.path.build.icons));
};

const copyFavicons = () => {
  return app.gulp
    .src(app.path.src.favicons)
    .pipe(app.gulp.dest(app.path.build.root));
};

export { copyFiles, copyFavicons, copyIcons };
