const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});
let location = {
    ip : 'ip',
    country : 'country'
}
app.post("/:ip", function (req, res) {
    con.connect(function(err) {
        
        if (err) throw err
      /*  let the_query = con.query(`SELECT country FROM iplocations WHERE ip LIKE '${req.params.ip.slice(0,8)}%'`);
        the_query.re
        the_query
            .on('result', function(row) {
            console.log('entered result')
            res.send(`{\n"ip" : ${req.params.ip} \n "country" : ${row.country} \n}`)
        })
            .on('end', function(row) {
            console.log('entered error')
            res.send('unknown');
          });
        })
    })*/
    let longip = req.params.ip.split(".")
    console.log(req.params.ip.split("."))
    con.query(`SELECT country FROM iplocations WHERE ip LIKE '${req.params.ip.slice(0,8)}%'`, function (err, result) {
        if (err) throw err;
        //console.log(result[0].country)
        if(result.length){
            res.send(`{\n"ip" : "${req.params.ip}" \n "country" : "${result[0].country}" \n}`)
        }
        else  {res.send(`{\n"ip" : ${req.params.ip} \n "country" : "unknown" \n}`)}
      });
    })
})


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))