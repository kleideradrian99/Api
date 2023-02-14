const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHtppError } = require('../utils/handleError');

const getItems = async(req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data });
    } catch (error) {
        handleHtppError(res, 'Error en getItems')
    }
}
const getItem = (req, res) => {}

const createItem = async(req, res) => {
    try {
        //Express Validator
        const body = matchedData(req)
        const data = await tracksModel.create(body);
        res.send({ data })
    } catch (error) {
        handleHtppError(res, 'Error en createItem')
    }
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