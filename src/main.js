import {readFile} from "node:fs/promises";

async function main(){
    let filePath = "D:/Practice/WPT/DAY9/package.json";
    let fileData = await readFile(filePath, {encoding: "utf-8"});
    console.log(fileData);
}

main();