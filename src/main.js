//how to read a file using NodeJS?
//this is a internal module
import { readFileSync, writeFileSync } from "node:fs";

let filePath = "D:/Practice/WPT/DAY9/output.txt";
let data= "hello world";
writeFileSync(filePath, data);
console.log("Write success!!");