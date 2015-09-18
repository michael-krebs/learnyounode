var http = require("http");
var result = "";
http.get(process.argv[2], function(res) {
	res.setEncoding("utf8");
	res.on("data", function(data) {
		result += data;
	});
	res.on("end", function() {
		console.log(result.length);
		console.log(result);
	});
});
