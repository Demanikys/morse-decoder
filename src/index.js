const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    var myArr = '';
    var morz = '';
    var arrMorze = [];
    result = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        myArr = `${myArr}${expr.slice(i, i + 10)},`;
    }
    for (let i = 0; i < myArr.length; i = i + 2) {
        if (myArr[i] === ',') {
            morz = `${morz},`;
            i--;
        } else {
            if (`${myArr[i]}${myArr[i + 1]}` === '10') {
                morz = `${morz}.`;
            } else if (`${myArr[i]}${myArr[i + 1]}` === '11') {
                morz = `${morz}-`;
            } else if (`${myArr[i]}${myArr[i + 1]}` === "**") {
                morz = `${morz} `
                i = i + 8;
            }
        }
    }
    arrMorze = morz.split(',');
    for (let i = 0; i < arrMorze.length - 1; i++) {
        if (arrMorze[i] === ' ') {
            result = `${result} `;
        } else {

            result = `${result}${MORSE_TABLE[arrMorze[i]]}`
        }
    }
    return result;
}

module.exports = {
    decode
}