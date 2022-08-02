const express = require('express')
const bodyParser = require('body-parser')
const maxmind = require('maxmind');

const app = express()
const PORT = 5000

let location = {
    ip: "ip",
    continent: "continent",
    country: "country"
}

app.use(bodyParser.json());

// ip parametru din path
/*app.post("/:ip", function (req, res) {
    maxmind.open('GeoLite2-City_20220802/GeoLite2-City.mmdb').then((lookup) => {
        let myip = req.params.ip
        if(maxmind.validate(myip)){
            location.ip = myip
            location.continent = lookup.get(myip).continent.names.en
            location.country = lookup.get(myip).country.names.en
            res.send(location)  
            //res.send(`IP: ${myip} \n Continent: ${lookup.get(myip).continent.names.en} \n Country: ${lookup.get(myip).country.names.en}`)
        }
        else {
            res.send(`invalid IP`)
        }
    });    
})*/

// ip parametru din body
app.post("/", function (req, res) {
    maxmind.open('GeoLite2-City_20220802/GeoLite2-City.mmdb').then((lookup) => {
        let myip = req.body.ip
        if(maxmind.validate(myip) && lookup.get(myip) != null){
            location.ip = myip
            location.continent = lookup.get(myip).continent.names.en
            location.country = lookup.get(myip).country.names.en
            res.send(location) 
        }
        
        else if (maxmind.validate(myip) === false) {
            res.send(`invalid IP`)
            //res.send(`IP: ${myip} \n Continent: ${lookup.get(myip).continent.names.en} \n Country: ${lookup.get(myip).country.names.en}`)
        }
        else {
            res.send(`unknown`)
        }
    });    
})


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
