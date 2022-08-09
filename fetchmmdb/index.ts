import decompress from "decompress";
import { allowsFetch, createFile, downloadArchive } from "./functions";

import fs from "fs";

async function main() {
  const downloadUrl =
    "https://github.com/ralexgt/Alex/archive/refs/heads/main.zip";
  const filePath = "./smth.zip";
  let destination = "./";

  if (!fs.existsSync(filePath) || fs.statSync(filePath).size == 0) {
    await createFile(filePath);
    await allowsFetch(downloadUrl);
    await downloadArchive(downloadUrl, filePath);
  } else {
    console.log("File path already exists");
  }

  await decompress(filePath, destination).then(() => {
    if (destination === "./") console.log("files extracted here");
    else console.log(`files extracted to ${destination} `);
  });
}

main();
