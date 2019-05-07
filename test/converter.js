var expect = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function() {
	describe("RGB to HEX conversion", function() {
		it("converts the basic colors", function() {
			var redHex = converter.rgbToHex(255, 0, 0);
			expect(redHex).to.deep.equal("ff0000");
		})	
	});

	describe("Hex to RGB conversion", function() {
		it("converts the basic colors", function() {
			var red = converter.hexToRgb("ff0000");

			expect(red).to.deep.equal([255, 0, 0])
		})
	});
})
