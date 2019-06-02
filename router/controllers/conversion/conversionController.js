module.exports.getNumbers = (req, res, next) => {
    res.send({result: req.body.result});
};