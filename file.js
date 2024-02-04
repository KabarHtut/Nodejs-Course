const fs = require('fs');

// Read
// fs.readFile('./docs/text.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data.toString());
// })

// Write
// fs.writeFile('./docs/text1.txt', 'Hello World', (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data);
// })

// if (!fs.existsSync('./docs/text1.txt')) {
//     fs.writeFile('./docs/text1.txt', 'Hello World', (err, data) => {
//         if (err) {
//             console.log(err);
//         }

//         console.log('after writing files');
//     })
// } else {
//     // Delete
//     fs.unlink('./docs/text1.txt', (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//     })

//     console.log('File Delete');
// }

// Create folder
// fs.mkdir('./new-folder', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder Created');
// })

//Delete folder
// fs.rmdir('./new-folder', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder Deleted');
// })

if (fs.existsSync('./new-folder')) {
    fs.rmdir('./new-folder', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder Deleted');
    })
} else {
    fs.mkdir('./new-folder', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder Created');
    })
}