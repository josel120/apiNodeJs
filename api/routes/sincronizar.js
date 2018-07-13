const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET Sincronizar!'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST Sincronizar!'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if(id){
        res.status(200).json({
            message: 'Si tiene parametros',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'NO tiene parametros'
        });
    }
    res.status(200).json({
        message: 'POST Sincronizar!'
    });
});

module.exports = router;