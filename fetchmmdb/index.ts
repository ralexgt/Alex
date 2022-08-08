import {allowsFetch} from "./functions";
import {downloadArchive} from "./functions";
import {createFile} from "./functions";
import decompress from "decompress";

import fs from "fs";


async function main()
{
    const downloadUrl = "https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-City&license_key=pbBnHIrYZX9EL2ka&suffix=tar.gz";
    const filePath = "./fetchedDB.tar.gz";
    const destination = "C:/Users/roman/Desktop/internship_repo/ip-country" 

    if(!fs.existsSync(filePath) || fs.statSync(filePath).size == 0) {
        await createFile(filePath);
        await allowsFetch(downloadUrl);
        await downloadArchive(downloadUrl, filePath);
    }
        else {
            console.log("File path already exists");
        }

    decompress(filePath, destination).then(files => {
        console.log(`files extracted to ${destination} `);
})
}

main()