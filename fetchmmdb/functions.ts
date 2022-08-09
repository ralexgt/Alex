import fetch from "node-fetch";
import fs from "fs";

export function createFile(filePath: string) {
  return new Promise<void>(async (resolve, reject) => {
    fs.writeFile(filePath, "", function (err) {
      if (err) throw err;
      console.log("File was created successfully. ");
    });
    resolve();
  });
}

export async function allowsFetch(url: string) {
  return new Promise<void>(async (resolve, reject) => {
    const res = await fetch(url);
    console.log("download status: " + res.ok + " " + res.status);
    resolve();
  });
}

export async function downloadArchive(url: string, path: string) {
  return new Promise<void>(async (resolve, reject) => {
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
      const file = res.body.pipe(fileStream);
      res.body.on("error", reject);
      fileStream.on("finish", resolve);
      console.log("Archive was downloaded ");
    });
    resolve();
  });
}
