const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async(req, res) => {
    const data = await tracksModel.find({});
    res.send({ data });
}
const getItem = (req, res) => {}

const createItem = async(req, res) => {
    const { body, file } = req;
    console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({ data })
}

const updateItems = (req, res) => {}
const deleteItems = (req, res) => {}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItems,
    deleteItems
};