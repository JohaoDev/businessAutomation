const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
const PORT = process.env.PORT || 8001;
const knex = require('./knex/knex.js');

//API
const personRoutes = require("./api/routes/person");

// app.use(express.static('cliente'));                SEND DATA WITH ANGULAR
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//RUTAS
app.use("/pers", personRoutes);



app.listen(PORT, () => {
  console.log(`[Servidor] en linea - PUERTO: ${PORT}`);
});