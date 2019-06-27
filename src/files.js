// var fs = require('fs');

// var linesCount = function(fileName, callback, onError) {
//     var processFile = function(err, data) {
//         if(err) {
//             onError('unable to open file' + fileName);
//         } else {
//             // console.log("==================" + data.toString().split('\n'))
//             callback(data.toString().split('\n').length);
//         }
//     };

//     fs.readFile(fileName, processFile);
// };

// module.exports = linesCount;