import {writeFile} from "node:fs/promises";

async function main(){
    let filePath = "D:/Practice/WPT/DAY9/output1.txt";
    let fileData = "hello everyone good morning";
    await writeFile(filePath, fileData);
}

main();