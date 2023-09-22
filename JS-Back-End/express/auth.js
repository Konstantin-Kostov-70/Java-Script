

module.exports = (req, res, next) => {
    if (req.headers['x-admin']) {
        next()
    } else {
        res.status(401), res.send('Please login')
    }

}