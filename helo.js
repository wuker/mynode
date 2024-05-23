var fs = require("fs");
const path = './data.txt'

try {
    fs.readFileSync(path, 'utf8');
} catch (err) {
    fs.writeFileSync(path, '0', { flag: 'a+' }, err => {});
}

const fileStr = fs.readFileSync(path).toString()

val = parseInt(fileStr, 10) + 1

console.log("The local value is ", val.toString())

fs.writeFileSync(path, val.toString())    
