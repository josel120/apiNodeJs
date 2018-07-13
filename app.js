const express = require('express');
const app = express();

const sincronizarRoutes = require('./api/routes/sincronizar');
app.use('/sincronizar', sincronizarRoutes);

module.exports = app;