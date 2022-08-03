import express, { response } from 'express'

const router = express.Router();

class Mesaje {
    constructor(mesaj){
        this.mesaj = mesaj
    }
}


router.post('/', (req, res) => {
    switch(Math.floor(Math.random() * 10)){
        case 0:
            res.send(new Mesaje(`Hi ${req.body.name}, what is your favorite color?`))
            break
        case 1:
            res.send(new Mesaje(`${req.body.name} it's a good day, right?`))
            break
        case 2:
            res.send(new Mesaje(`${req.body.name}, what are your plans for the weekend?`))
            break
        case 3:
            res.send(new Mesaje(`What's up ${req.body.name}?`))
            break
        case 4:
            res.send(new Mesaje(`How are you doing, ${req.body.name}?`))
            break
        case 5:
            res.send(new Mesaje(`Hi ${req.body.name}, how are you doing?`))
            break
        case 6:
            res.send(new Mesaje(`Good day ${req.body.name}!`))
            break
        case 7:
            res.send(new Mesaje(`Hey ${req.body.name}, nice weather outside?`))
            break
        case 8:
            res.send(new Mesaje(`${req.body.name}, the current date is ${new Date()}`))
            break
        case 9:
            res.send(new Mesaje(`Hi ${req.body.name}, what is your favorite color?`))
            break
    }
})

export default router;
