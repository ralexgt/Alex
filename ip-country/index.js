const express = require("express")
const bodyParser = require("body-parser")
const maxmind = require("maxmind");

const PORT = 5000;
const DB_PATH = "GeoLite2-City_20220802/GeoLite2-City.mmdb";



async function main(){  
    const lookup = await maxmind.open(DB_PATH);
    const app = express();

    app.use(bodyParser.json());

    app.post("/api/location", function (req, res) {
        const clientIp = req.body.ip

        if(!maxmind.validate(clientIp)){
            res.status(400).json({ error: "Invalid IP" });
            return;
        }
        
        const location = lookup.get(clientIp);
        if(!location) {
            res.status(400).json({ error: "Unknown location" });
            return;
        }
        
        res.json({
            ip: clientIp,
            continent: location.continent.names.en,
            country: location.country.names.en
        });

        app.listen(PORT, () => 
            console.log(`Server running on port http://localhost:${PORT}`));
    });    
}

main();