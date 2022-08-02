import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/ipLocate.js';
import usersRoutes2 from './routes/certainIp.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/ipLocate', usersRoutes);
app.use('/certainIp', usersRoutes2);

app.get("/", (req,res) => {
    res.send(`Visit http://localost:${PORT}/ipLocate`);
});


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))