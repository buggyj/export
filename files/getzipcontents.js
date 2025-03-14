/*\
title: $:/bj/export/plugin/getzipcontents.js
type: application/javascript
module-type: library
\*/
var JSZip = require("$:/plugins/tiddlywiki/jszip/jszip.js");
exports.name = "getzipcontents";
exports.run = function() {
    var zip = this._graw("%","__zip__")
    return zip.generate({
			type: "base64"
		});
};