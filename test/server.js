var expect  = require("chai").expect;
var request = require("request");

describe("Color code converter API", function() {
	describe("RGB to Hex", function() {
		 var url = "http://localhost:3011/rgbToHex?red=255&green=255&blue=255";
		 var failUrl = "http://localhost:3011/rgbToHex?red=255&green=255";

		it("returns status code 200", function(){
			request(url, function(error, response, body) {
				
				expect(response.statusCode).to.equal(200);
			});			
		});

		it("returns status code 500", function(){
			request(failUrl, function(error, response, body) {
				expect(response.statusCode).to.equal(500);
			});			
		});

		it("returns the color in hex", function() {
			request(url, function(error, response, body) {
				expect(body).to.equal("ffffff");
			});
		});
	});

	describe("Hex to RGB", function() {
		var url = "http://localhost:3011/hexToRgb?hex=00ff00";

		it ("returns status code 200", function() {
			request(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
			});
		});

		it("return code in RGB", function() {
			request(url, function(error, response, body) {
				expect(body).to.equal("[0,255,0]");
			});
		});
	});
});
