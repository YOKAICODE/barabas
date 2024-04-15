import postcss from "gulp-postcss";
import postcssConfig from "../../postcss.config.cjs";

const tailwind = () => {
  return app.gulp
    .src(app.path.src.tailwindcss)
    .pipe(postcss(postcssConfig));
};

export {tailwind};