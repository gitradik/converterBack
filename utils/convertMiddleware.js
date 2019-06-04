const toArab = require('./convertToArabic');
const toRom = require('./convertToRoman');

module.exports.convertNumbers = async (req, res ,next) => {
    try {
        let result = null;
        const num = req.body.text;
        if(+/\d+/.exec(num)) {
            result = await toRom(num);
        } else {
            result = await toArab(num);
        }
        req.body.result = result;
    } catch (e) {
        next({err: "ERROR", status: "500"});
    }
    next();
};