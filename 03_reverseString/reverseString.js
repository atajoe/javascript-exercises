const reverseString = function(string) {
    const stringArray = string.split("")
    const reverseArray = stringArray.reverse()
    let finalString = ""
    i = 0
    while (i < reverseArray.length){
        finalString += reverseArray[i]
        i++;
    }
    return finalString;

};

// Do not edit below this line
module.exports = reverseString;
