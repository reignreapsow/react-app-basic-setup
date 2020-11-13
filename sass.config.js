// SASS SETUP
var sass = require("sass");

var result = sass.renderSync({file: scss_filename});

// SETUP OPTION TWO
// var result = sass.renderSync({
//     data: scss_content
//     [, options..]
//   });