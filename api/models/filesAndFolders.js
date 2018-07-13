const mongoose = require('mongoose');

const filesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    url: String,
    id_cloud: Number
});

module.exports = mongoose.model('FilesandFolders', filesSchema);