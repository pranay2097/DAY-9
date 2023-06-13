import {readFile} from "node:fs/promises";

async function main(){
    try{
    let filePath = "D:/Practice/WPTt/DAY9/package.json";

    let fileData = await readFile(filePath, {  encoding: "utf8"});
    console.log(fileData);
    }catch(e){
        console.log("exception occured:: ",e.message);
    }
}

main();