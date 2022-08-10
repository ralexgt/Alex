import express from "express";
import bodyParser from "body-parser";
import maxmind, { CityResponse } from "maxmind";
import { resolveIp } from "./resolver";

const PORT = 5000;
const DB_PATH = "GeoLite2-City/GeoLite2-City.mmdb";

async function main() {
  const lookup = await maxmind.open<CityResponse>(DB_PATH);
  const app = express();

  app.use(bodyParser.json());

  app.post("/api/location", function (req, res) {
    const clientIp: string = req.body.ip;

    const resolveResponse = resolveIp(lookup, clientIp);

    if (resolveResponse.error) {
      res.status(400).send(resolveResponse);
    } else {
      res.send(resolveResponse);
    }
  });

  app.listen(PORT, () =>
    console.log(`Server running on port http://localhost:${PORT}`)
  );
}

main();
