module.exports = function toReadable(number) {

    let readableNumber = '';
    let hundreds = 0;
    let tens = 0;
    let units = 0;

    let numbersList = {
        90: 'ninety',
        80: 'eighty',
        70: 'seventy',
        60: 'sixty',
        50: 'fifty',
        40: 'forty',
        30: 'thirty',
        20: 'twenty',
        19: 'nineteen',
        18: 'eighteen',
        17: 'seventeen',
        16: 'sixteen',
        15: 'fifteen',
        14: 'fourteen',
        13: 'thirteen',
        12: 'twelve',
        11: 'eleven',
        10: 'ten',
        9: 'nine',
        8: 'eight',
        7: 'seven',
        6: 'six',
        5: 'five',
        4: 'four',
        3: 'three',
        2: 'two',
        1: 'one',
        0: 'zero'
    }

    hundreds = Math.floor(number / 100);
    tens = Math.floor((number - (hundreds * 100)) / 10) * 10;
    
    if (tens < 20) {
        units = number - (hundreds * 100);
        tens = 0;
    } else {
        units = number - (hundreds * 100) - tens;
    }

    hundreds == 0 ? readableNumber : readableNumber += `${numbersList[hundreds]} hundred`;
    tens == 0 ? readableNumber : readableNumber += ` ${numbersList[tens]}`;
    units == 0 ? readableNumber : readableNumber += ` ${numbersList[units]}`;
    number == 0 ? readableNumber = `${numbersList[number]}` : readableNumber;

    return readableNumber.trim();
}
