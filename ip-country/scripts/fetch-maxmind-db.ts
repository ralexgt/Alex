import fs from "fs";
import path from "path";
import fetch from "isomorphic-fetch";
import {exec, mv } from "shelljs";
import decompress from "decompress";

const URL =
	"https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-City&license_key=pbBnHIrYZX9EL2ka&suffix=tar.gz";

async function main() {
	const response = await fetch(URL);
	if (!response?.body) {
		throw new Error("No body");
	}

	const data = await response.arrayBuffer();

	const filePath = path.join(process.cwd(), "./GeoLite2-City.tar.gz");
	await fs.promises.writeFile(filePath, new Uint8Array(data));

	console.log("done download");

	await decompress(filePath, process.cwd());

	console.log("done untar");

	await fs.promises.unlink(filePath);

	const files = await fs.promises.readdir(process.cwd());
	const directoryName = files.find((f) => f.includes("GeoLite2-City"));

	if (!directoryName) {
		throw new Error("No directory found");
	}

	mv(
		path.join(process.cwd(), directoryName),
		path.join(process.cwd(), "./GeoLite2-City")
	);

	console.log("done");
}
  
main();
