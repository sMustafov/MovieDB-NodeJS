const fs = require('fs')
const path = 'path'
const utils = require('../utils/default')

module.exports = (req, res) => {
    if(req.url.startsWith('/public/') && req.method === 'GET') {
        let filePath = path.normilize(path.join(__dirname, `..${req.url}`))
        fs.readFile(filePath, (err, data) => {
            if(err) {
                utils.defaultFailedReq(res, err)
                return
            }
            if(!utils.getFileType(req.url)) {
                return
            }
            utils.defaultSuccessReq(res, data, utils.getFileType(req.url))
        })
    } else {
        return true
    }
}