const sumAll = function(number1, number2) {
    let newNumber = 0;
    let number_1 = number1;
    let number_2 = number2;
    let number_3 = null;

    if (number_1 > number_2){
        number_3 = number_1;
        number_1 = number_2;
        number_2 = number_3;

    }

    if (number_1 < 0 || number_2 < 0){
        return 'ERROR'
    } else if (!Number.isInteger(number_1) ||!Number.isInteger(number_2)){
        return 'ERROR'
    }
    for (let i = number_1; i <= number_2; i++){
        newNumber += i
    }
    return newNumber
};

// Do not edit below this line
module.exports = sumAll;
