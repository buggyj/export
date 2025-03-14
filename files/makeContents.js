/*\
title: $:/bj/export/plugin/makeContents.js
type: application/javascript
module-type: library
\*/
exports.name = "makeContents";
exports.run = function(toJson) {
 
    var keys = this._gtab("$"), output=''
    if (toJson) return JSON.stringify(keys)
    for (key in keys) {
      if (key !== 'text' ) output += `${key}: ${keys[key]}\n` 
    }
    output += `\n` + keys['text']
    return output
};