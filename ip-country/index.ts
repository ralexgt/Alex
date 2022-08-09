import express from "express";
import bodyParser from "body-parser";
import maxmind from "maxmind";

const PORT = 5000;
const DB_PATH = "GeoLite2-City_20220805/GeoLite2-City.mmdb";

async function main(){  
    const lookup = await maxmind.open(DB_PATH);
    const app = express();
    
    app.use(bodyParser.json());


    app.post("/api/location", function (req, res) {
        const clientIp: string = req.body.ip;

        if(!maxmind.validate(clientIp)){
            res.status(400).json({ error: "Invalid IP" });
            return;
        }
        
        interface Location {
            continent: {
                names: 
                    {en: string };
                },
            country: {
                names: 
                    {en: string };
                }
            };
            
        const location = lookup.get(clientIp) as Location;
        if(!location) {
            res.status(400).json({ error: "Unknown location" });
            return;
        }
        
        res.json({
            ip: clientIp,
            continent: location.continent.names.en,
            country: location.country.names.en
        });
    });     

app.listen(PORT, () => 
    console.log(`Server running on port http://localhost:${PORT}`));
};

main();