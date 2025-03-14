/*\
title: $:/bj/export/plugin/createzip.js
type: application/javascript
module-type: library
\*/
var JSZip = require("$:/plugins/tiddlywiki/jszip/jszip.js");
exports.name = "createzip";
exports.run = function() {
    this._sraw("%","__zip__",new JSZip())
	return ""
};