const a = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const b = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
module.exports = function toReadable(number) {
    if (number === 0) return a[number];
    
    let result = '';

    const hundred = Math.floor(number / 100)
    if (hundred > 0){
        result = `${a[hundred]} hundred`;
        number = number - (hundred * 100);
    }

    if (number > 0 && number <= 19){
        return `${result} ${a[number]}`.trim()
    }

    const ten = Math.floor(number / 10);
    if (ten > 0){
        result = `${result} ${b[ten]}`;
        number = number - (ten * 10);
    }

    if (number > 0){
        return `${result} ${a[number]}`.trim()
    }
    
    return `${result}`.trim()
};
