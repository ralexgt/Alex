import fetch from "node-fetch";
import fs from "fs";
import decompress from "decompress";


export function createFile () {
    fs.writeFile("fetchedDB.tar.gz", "", function (err) {
    if (err) throw err;
    console.log("File was created successfully. " +  new Date());

});
}

export async function allowsFetch(url: string)
{
    const res = await fetch(url);
      console.log("download status: " + new Date());
      console.log(res.ok);
      console.log(res.status);
 }

export async function downloadAndDecompress  (url: string, path: string) {
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
        const file = res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
    });
    console.log("archive downloaded " + new Date())
    decompress(path, "./").then(files => {
        console.log("files extracted "+ new Date());
    });
};
