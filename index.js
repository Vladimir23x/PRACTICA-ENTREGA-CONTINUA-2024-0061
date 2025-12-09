const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo desde DevOps! VLADIMIR PEREZ SOTO 2024-0061");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
