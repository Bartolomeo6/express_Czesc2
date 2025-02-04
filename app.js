const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/data', (req, res)=> {
    const daneZZapytania = req.body;
    console.log(daneZZapytania);
    
    res.send(daneZZapytania);
})

app.listen(port, ()=> {
    console.log("Serwer nasłuchuje na porcie ",port);
})
