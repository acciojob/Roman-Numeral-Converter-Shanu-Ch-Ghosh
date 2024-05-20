function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let romanNum = '';

    // Create an array of values and symbols for easier handling
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    // Iterate through the values and subtract them from num, while appending the corresponding symbols to romanNum
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            romanNum += symbols[i];
        }
    }

    return romanNum;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));  // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
