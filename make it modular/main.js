var module = require("./module")

module(process.argv[2], process.argv[3], function (err, data) {
	if (err) 
		return console.error("error:", err);

	for (var i in data) {
		console.log(data[i]);
	}
})