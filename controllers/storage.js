const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHtppError } = require('../utils/handleError');
const fs = require("fs")

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async(req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({ data });
    } catch (error) {
        handleHtppError(res, 'ERROR_LIST_ITEMS_STORAGE')
    }
}

const getItem = async(req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleHtppError(res, 'ERROR_DETAIL_ITEM_STORAGE')
    }
}

const createItem = async(req, res) => {
    try {
        const { file } = req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModel.create(fileData);
        res.send({ data })
    } catch (error) {
        handleHtppError(res, 'ERROR_CREATE_ITEM_STORAGE')
    }
}

const deleteItem = async(req, res) => {
    try {
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne(id); // Eliminar de la BD
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`; //Ruta del storage

        fs.unlinkSync(filePath); //Eliminar archivo fisico
        const data = {
            filePath,
            deleted: 1
        };
        res.send({ data });
    } catch (error) {
        handleHtppError(res, 'ERROR_DELETE_ITEM_STORAGE')
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem
};