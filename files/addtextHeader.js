/*\
title: $:/bj/export/plugin/addtextHeader.js
type: application/javascript
module-type: library
\*/
exports.name = "addtextHeader";
exports.run = function() {
    var g = this._g
    var text = g("$text"),header
    var foundheader=/^\/\*\\(?:\r?\n)((?:^[^\r\n]*(?:\r?\n))+?)(^\\\*\/$(?:\r?\n)?)/mg.exec(text);
    if (foundheader) return text;
    //else add header
    header = `/*\\
title: ${g("$title")}
type: ${g("$type")}
module-type: ${g("$module-type")||""}
\\*/
`
    return header+text
};