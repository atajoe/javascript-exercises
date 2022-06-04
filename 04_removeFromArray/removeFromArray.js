const removeFromArray = function(input_Array,argument,argument_2, argument_3, argument_4) {
    const newArray = input_Array
    const cursed_number = argument
    const cursed_number_2 = argument_2
    const cursed_number_3 = argument_3
    const cursed_number_4 = argument_4
    const newArray_2 = []

    for (let i = 0; i <= newArray.length-1; i++){
        if ((newArray[i] !== cursed_number && newArray[i] !== cursed_number_2 && newArray[i] !== cursed_number_3 && newArray[i] !== cursed_number_4)){
            newArray_2.push(newArray[i])
        }
    }
    return newArray_2

};

// Do not edit below this line
module.exports = removeFromArray;
