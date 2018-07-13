const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const FilesAndFolders = require("../models/filesAndFolders");

router.get('/', (req, res, next) => {
    FilesAndFolders.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const file = new FilesAndFolders({
        id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        url: req.body.url,
        id_cloud: req.body.id_cloud
    });
    file.save().then(
        result => {
            console.log(result);
            res.status(201).json({
                message: "POST Sincronizar!",
                createdProduct: result
            });
        }
    )
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    FilesAndFolders.findById(id)
    .exec()
    .then(doc => {
        console.log("Desde Base de datos", doc);
        if(doc){
            res.status(200).json(doc);
        } else{
            res.status(404)
            .json({
                message: "No se encontro data con ese ID"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    FilesAndFolders.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

module.exports = router;