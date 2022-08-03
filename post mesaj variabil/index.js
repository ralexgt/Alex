import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/greet.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/greet', usersRoutes);

app.get("/", (req,res) => {
    res.send("Home page");
});


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))