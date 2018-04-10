const fs = require('fs')
const db = require('../config/dataBase')
const utils = require('../utils/default')
const statusPath = '/views/status.html'

module.exports = (req, res) => {
    if(req.headers.statusheader === 'Full') {
        fs.readFile(statusPath, 'utf8', (err, data) => {
            if(err) {
                utils.defaultFailedReq(req, err)
                return
            }
            let moviesCount = db.length
            let html = data.replace('{{replaceMe}}', `Movies count is ${moviesCount}`)
            utils.defaultSuccessReq(res, html, 'text/html')
        })
    } else {
        return true
    }
}