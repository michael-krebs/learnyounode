var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, files) {
	for(file in files) {
		if(path.extname(files[file]) === ("." + process.argv[3])) {
			console.log(files[file]);
		}
	}
});