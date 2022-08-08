import {allowsFetch} from "./functions";
import {downloadArchive} from "./functions";
import {createFile} from "./functions";
import {decompressArchive} from "./functions";

async function main()
{
    createFile();

    const downloadUrl = "https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-City&license_key=pbBnHIrYZX9EL2ka&suffix=tar.gz";
    const filePath = "./fetchedDB.tar.gz";

    await allowsFetch(downloadUrl);
    await downloadArchive(downloadUrl, filePath);
    await decompressArchive(filePath, "C:/Users/roman/Desktop/internship_repo/ip-country");   
}

main()