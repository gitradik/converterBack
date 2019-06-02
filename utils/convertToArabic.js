const arabic = require('../db/arabicNumbers');
const roman = require('../db/romanNumbers');

const toArab = (str) => {
    let result = 0;
    for (let i = 0; i <= arabic.length; i++) {
        while (str.indexOf(roman[i]) === 0) {
            result += arabic[i];
            str = str.replace(roman[i], '');
        }
    }
    return result;
};

module.exports = toArab;