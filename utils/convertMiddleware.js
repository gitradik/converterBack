const toArab = require('./convertToArabic');
const toRom = require('./convertToRoman');

module.exports.convertNumbers = (req, res ,next) => {
    try {
        let result = null;
        const num = req.body.text;
        if(+/\d+/.exec(num)) {
            result = toRom(num);
        } else {
            result = toArab(num);
        }
        req.body.result = result;
    } catch (e) {
        req.body.result = 'error';
    }
    next();
};