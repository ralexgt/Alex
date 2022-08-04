const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const PORT = 3000;

function main(){
    app.use(bodyParser.json());

    type Request =
    {   body: 
        {
            name: string;
        }
    };
    type Response = { status: (arg0: number) => {
        (): any;
        new(): any;
        json: {
            (arg0: { error: string; }): void;
            new(): any;
        };   
        };
        json: (arg0: {mesaj: string
            }) => void;
        };

    app.post('/api/greeting', (req: Request, res: Response) => {
        switch(Math.floor(Math.random() * 10)){
            case 0:
                res.json({mesaj: `Hi ${req.body.name}, what is your favorite color?`})
                break
            case 1:
                res.json({mesaj: `${req.body.name} it's a good day, right?`})
                break
            case 2:
                res.json({mesaj: `${req.body.name}, what are your plans for the weekend?`})
                break
            case 3:
                res.json({mesaj: `{What's up ${req.body.name}?}`})
                break
            case 4:
                res.json({mesaj: `How are you doing, ${req.body.name}?`})
                break  
            case 5:
                res.json({mesaj: `Hi ${req.body.name}, how are you doing?`})
                break
            case 6:
                res.json({mesaj: `Good day ${req.body.name}!`})
                break
            case 7:
                res.json({mesaj: `Hey ${req.body.name}, nice weather outside?`})
                break
            case 8:
                res.json({mesaj: `${req.body.name}, the current date is ${new Date()}`})
                break
            case 9:
                res.json({mesaj: `Hi ${req.body.name}, what is your favorite color?`})
                break
            }
        })

    app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
}

main()   
//