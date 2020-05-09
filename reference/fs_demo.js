const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder Created');
// })

// Create and Write to File

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//   if (err) throw err;
//   console.log('File Created. Hello World written.');

//   // File Append
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I Love Node.js.', err => {
//     if (err) throw err;
//     console.log('File Updated!');
//   })
// })

// Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })

// Rename File
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-world.txt'), err => {
//   if (err) throw err;
//   console.log("File Renamed");
// })