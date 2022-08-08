import fetch from "node-fetch";
import fs from "fs";
import decompress from "decompress";


export function createFile () {
    return new Promise<void>( async (resolve, reject) => {
    fs.writeFile("fetchedDB.tar.gz", "", function (err) {
    if (err) throw err;
    console.log("File was created successfully. " +  new Date());
    })
    resolve();
})
}

export async function allowsFetch(url: string)
{
    return new Promise<void>( async (resolve, reject) => {
    const res = await fetch(url);
    console.log("download status: " + new Date());
    console.log(res.ok);
    console.log(res.status);
    resolve();
     })
 }

export async function downloadArchive  (url: string, path: string) {
    return new Promise<void>( async (resolve, reject) => {
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
        const file = res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
        console.log("Archive was downloaded " + new Date());
        })
    resolve();
    })
}

export async function decompressArchive (file: string, destination: string){
    return new Promise<void>( async (resolve, reject) => {
    decompress(file, destination).then(files => {
        console.log(`files extracted to ${destination} `+ new Date());
    })
    resolve();
})
}