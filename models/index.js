const ENGINE_DB = process.env.ENGINE_DB;
const pathModel = ENGINE_DB === 'nosql' ? './nosql' : './mysql';

const models = {
    storageModel: require(`${pathModel}/storage`),
    tracksModel: require(`${pathModel}/tracks`),
    usersModel: require(`${pathModel}/users`),
}

module.exports = models