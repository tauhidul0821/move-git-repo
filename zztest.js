// var name = "components/khadija";

// if (name.includes("/")) {
//   var d = name.split("/")
//   var folder_name_prefix = d.slice(0, d.length - 1);
//   var create_folder = folder_name_prefix.join('/');
//   console.log('create_folder ->', create_folder);
//   var fileName = d[d.length - 1];
//   console.log('fileName -> ', fileName);


// } else {
//   console.log('no need to create folder');

// }



var fs = require('fs');
var dir = 'component/temp/tuhin';
var cwd = process.cwd();

if (!fs.existsSync(dir)) {
  fs.mkdir(`${cwd}/${dir}`, { recursive: true }, (error) => {
    if (error) {
      console.error(error);
    }
  });
}