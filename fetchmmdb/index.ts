import {allowsFetch} from "./functions";
import {downloadAndDecompress} from "./functions";
import {createFile} from "./functions";


function main()
{
    createFile();

    const downloadUrl = "https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-City&license_key=pbBnHIrYZX9EL2ka&suffix=tar.gz";
    const filePath = "./fetchedDB.tar.gz";

    allowsFetch(downloadUrl);
    downloadAndDecompress(downloadUrl, filePath);
    
}

main()