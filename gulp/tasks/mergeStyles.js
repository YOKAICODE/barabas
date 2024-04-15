import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";
import mergeStream from "merge-stream";

import { scss } from "./scss.js";
import { tailwind } from "./tailwindcss.js";

const mergeStyles = () => {
  return mergeStream(scss(), tailwind())
    .pipe(concat("style.min.css"))
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};

export { mergeStyles };
