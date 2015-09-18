var http = require("http");

var urls = process.argv.slice(2);
var total = ["", "", ""];
var counter = 0;

for (var i = 0; i < urls.length; i++) {
	httpGet(i)
}

// closures are fun
function httpGet(index) {
  http.get(urls[index], function(res) {
    var result = "";
    res.setEncoding("utf8");
    res.on("data", function(data) {
      result += data;
    });
    res.on("end", function() {
    	total[index] = result;
      counter++;
      if (counter === 3) {
        for (var j = 0; j < total.length; j++) {
          console.log(total[j]);
        }
      }
    });
  });
}