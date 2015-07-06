var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function(err, contents) {
	for (var i in contents) {
		if (path.extname(contents[i]) === ("." + process.argv[3])) {
			console.log(contents[i]);
		}
	}
});