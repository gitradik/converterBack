const arabic = require('../db/arabicNumbers');
const roman = require('../db/romanNumbers');

const toRoman = (num) => {
    let result = '';
    for (let i = 0;i<=arabic.length;i++) {
        while (num%arabic[i] < num) {
            result += roman[i];
            num -= arabic[i];
        }
    }
    return result;
};

module.exports = toRoman;