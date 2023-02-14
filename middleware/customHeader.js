const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'kleider-01') {
            next()
        } else {
            res.status(403)
            res.send({ error: "APIKYE no es correcta" })
        }
    } catch (e) {
        res.status(403)
        res.send({ error: "Algo Ocurrio en el custom Header" })
    }
}

module.exports = customHeader