// Импорт модуля GULP
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js";

// Глобальная переменная
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copyFiles, copyFavicons ,copyIcons } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { mergeStyles } from "./gulp/tasks/mergeStyles.js";
// import { tailwind } from "./gulp/tasks/tailwindcss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
// import {otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";

// Наблюдатель за изменением в файлах
const watcher = () => {
  // gulp.watch(path.watch.files, copyFiles);
  gulp.watch(path.watch.html, gulp.parallel(html, mergeStyles));
  gulp.watch(path.watch.scss, mergeStyles);
  gulp.watch(path.watch.js, gulp.parallel(js, mergeStyles));
  gulp.watch(path.watch.images, images);
};

const mainTasks = gulp.parallel(
  copyFavicons,
  copyIcons,
  copyFiles,
  html,
  js,
  mergeStyles,
  images
);

// Построение сценариев выполнения задач
const test = gulp.series(reset, mainTasks);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

export { dev, build, deployZIP, test };

// Выполнение сценариев
gulp.task("default", dev);
