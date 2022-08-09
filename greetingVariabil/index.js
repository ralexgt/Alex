var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
function main() {
    app.use(bodyParser.json());
    app.post('/api/greeting', function (req, res) {
        switch (Math.floor(Math.random() * 10)) {
            case 0:
                res.json({ mesaj: "Hi ".concat(req.body.name, ", what is your favorite color?") });
                break;
            case 1:
                res.json({ mesaj: "".concat(req.body.name, " it's a good day, right?") });
                break;
            case 2:
                res.json({ mesaj: "".concat(req.body.name, ", what are your plans for the weekend?") });
                break;
            case 3:
                res.json({ mesaj: "{What's up ".concat(req.body.name, "?}") });
                break;
            case 4:
                res.json({ mesaj: "How are you doing, ".concat(req.body.name, "?") });
                break;
            case 5:
                res.json({ mesaj: "Hi ".concat(req.body.name, ", how are you doing?") });
                break;
            case 6:
                res.json({ mesaj: "Good day ".concat(req.body.name, "!") });
                break;
            case 7:
                res.json({ mesaj: "Hey ".concat(req.body.name, ", nice weather outside?") });
                break;
            case 8:
                res.json({ mesaj: "".concat(req.body.name, ", the current date is ").concat(new Date()) });
                break;
            case 9:
                res.json({ mesaj: "Hi ".concat(req.body.name, ", what is your favorite color?") });
                break;
        }
    });
    var x;
    app.listen(PORT, function () { return console.log("Server running on port http://localhost:".concat(PORT)); });
}
main();
//
