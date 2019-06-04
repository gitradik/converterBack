const arabic = require('../db/arabicNumbers');
const roman = require('../db/romanNumbers');

function toArab(str) {
    return new Promise(resolve => {
        let result = 0;
        for (let i = 0; i <= arabic.length; i++) {
            while (str.indexOf(roman[i]) === 0) {
                result += arabic[i];
                str = str.replace(roman[i], '');
            }
        }
        resolve(result);
    });
}

module.exports = toArab;