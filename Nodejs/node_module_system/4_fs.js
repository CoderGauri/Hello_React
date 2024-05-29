//files
const fs  = require('fs');

//read a file
 
let fileContent = fs.readFileSync('f1.txt');
console.log('data f1 ' + fileContent);


//write a file
fs.writeFileSync('f2.txt' , "This is a new file")
console.log("file changed");

//append a file 
fs.appendFileSync('f3.txt' , "This is the updated data");
console.log("data updated")

//delete a file
fs.unlinkSync('f2.txt');
console.log('file deleted');