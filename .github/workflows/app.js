const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    // Captura parámetro de entrada del usuario
    const usuario = req.query.username;
    
    // Vulnerabilidad: Inyección de código mediante eval()
    eval("console.log('Usuario conectado: ' + " + usuario + ");");
    
    res.send("OK");
});

app.listen(3000);
