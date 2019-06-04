const arabic = require('../db/arabicNumbers');
const roman = require('../db/romanNumbers');

function toRoman(num) {
    return new Promise(resolve => {
        let result = '';
        for (let i = 0; i <= arabic.length; i++) {

            while (num%arabic[i] < num) {
                result += roman[i];
                num -= arabic[i];
            }
        }
        resolve(result);
    });
}

module.exports = toRoman;