var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/rgbToHex", function(req, res) {
	if (req.query.red && req.query.green && req.query.blue) {
		var red   = parseInt(req.query.red, 10);
		var green = parseInt(req.query.green, 10);
		var blue  = parseInt(req.query.blue, 10);

		var hex = converter.rgbToHex(red, green, blue);
		res.send(hex);	
	} else {
		res.status(500).send("Internal Error");
	}
});

app.get("/hexToRgb", function(req, res) {
	var hex = req.query.hex;
	var rgb = converter.hexToRgb(hex);
	
	res.send(JSON.stringify(rgb));
});

app.listen(3011);

