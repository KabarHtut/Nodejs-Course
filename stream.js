const fs = require('fs');

const read = fs.createReadStream('docs/large.txt');
const writeStream = fs.createWriteStream('docs/large-write.txt');

// read.on('data', function(data) {
//     console.log(data.toString());
//     console.log("-----chuck------");
// })

read.on('data', function(data) {
    writeStream.write(data.toString());
    writeStream.write("-----chuck------");
});