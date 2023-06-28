const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHtppError } = require('../utils/handleError');

const getItems = async(req, res) => {
    try {
        const user = req.user;
        const data = await tracksModel.find({});
        res.send({ data, user });
    } catch (error) {
        handleHtppError(res, 'ERROR_GET_ITEMS')
    }
}

const getItem = async(req, res) => {
    try {
        req = matchedData(req);
        const { id } = req
        const data = await tracksModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleHtppError(res, "ERROR_GET_ITEM")
    }
}

const createItem = async(req, res) => {
    try {
        //Express Validator
        const body = matchedData(req)
        const data = await tracksModel.create(body);
        res.send({ data })
    } catch (error) {
        handleHtppError(res, 'ERROR_CREATE_ITEM')
    }
}

const updateItems = async(req, res) => {
    try {
        //Express Validator
        const { id, ...body } = matchedData(req); //Separar Id de la info
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        res.send({ data });
    } catch (error) {
        handleHtppError(res, 'ERROR_UPDATE_ITEM')
    }
}

const deleteItems = async(req, res) => {
    try {
        req = matchedData(req);
        const { id } = req
        const data = await tracksModel.delete({ _id: id });
        res.send({ data });
    } catch (error) {
        handleHtppError(res, "ERROR_DELETE_ITEM")
    }
}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItems,
    deleteItems
};