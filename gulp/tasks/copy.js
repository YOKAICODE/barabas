const copyFiles = () => {
  return app.gulp
    .src(app.path.src.files, { removeBOM: false })
    .pipe(app.gulp.dest(app.path.build.files));
};

const copyIcons = () => {
  return app.gulp
    .src(app.path.src.icons, { removeBOM: false })
    .pipe(app.gulp.dest(app.path.build.icons));
};

const copyFavicons = () => {
  return app.gulp
    .src(app.path.src.favicons, { removeBOM: false })
    .pipe(app.gulp.dest(app.path.build.root));
};

export { copyFiles, copyFavicons, copyIcons };
