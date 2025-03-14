/*\
title: $:/bj/export/plugin/addToZip.js
type: application/javascript
module-type: library
\*/
var JSZip = require("$:/plugins/tiddlywiki/jszip/jszip.js");
exports.name = "addToZip";
exports.run = function(name, content) {
    var zip = this._graw("%","__zip__")
    zip.file(name, content);
	return ""
};