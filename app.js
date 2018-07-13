const express = require('express');
const app = express();
const morgan = require('morgan');



const sincronizarRoutes = require('./api/routes/sincronizar');
app.use('/sincronizar', sincronizarRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.use(morgan('dev'));
module.exports = app;