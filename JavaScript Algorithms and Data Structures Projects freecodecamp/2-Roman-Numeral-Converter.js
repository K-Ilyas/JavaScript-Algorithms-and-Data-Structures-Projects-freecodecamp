/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
    const ROMAN_SYMBOLS = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    // function for seacrh in the ROMAN_SYMBOLS
    const search = (x) => {
        return Object.keys(ROMAN_SYMBOLS).filter(e => ROMAN_SYMBOLS[e] === x).join("");
    };
    // return
    return (num.toString().split("").reverse().reduce((table, a, i) => {
        table.unshift(a + "0".repeat(i));
        return table;
    }, [])).map((number, i) => {
        let num = Number(number);
        let next_item = 0;
        let tmp = 0;
        if (num !== 0) {
            return Object.keys(ROMAN_SYMBOLS).reverse().map((e) => {
                if (num !== 0) {
                    if (ROMAN_SYMBOLS[e] === num) {
                        num = 0;
                        return e;
                    }
                    else if (num % ROMAN_SYMBOLS[e] === 0 && ROMAN_SYMBOLS[e] < num && num / ROMAN_SYMBOLS[e] <= 3) {
                        tmp = num;
                        num = 0;
                        return e.repeat(tmp / ROMAN_SYMBOLS[e]);
                    }
                    else {
                        next_item = (num - ROMAN_SYMBOLS[e]) / Number("1" + "0".repeat(number.length - 1));
                        if (ROMAN_SYMBOLS[e] - Number("1" + "0".repeat(number.length - 1)) == num) {
                            num = 0;
                            return search(Number("1" + "0".repeat(number.length - 1))) + e;

                        }
                        else if (ROMAN_SYMBOLS[e] + next_item * Number("1" + "0".repeat(number.length - 1)) == num
                            && Number.isInteger(next_item)
                            && ((next_item <= 3 && next_item >= 1))
                            && ROMAN_SYMBOLS[e] != Number("1" + "0".repeat(number.length - 1))
                        ) {
                            num = 0;
                            return e + search(Number("1" + "0".repeat(number.length - 1))).repeat(next_item);
                        }
                    }
                }
                return "";
            }).join("");
        }
        else
            return "";
    }).join("");
}

convertToRoman(3999);