const palindromes = function (word) {
    let processedString = word.toLowerCase().replace(/[^a-z]/g,"");
    const reversedwordArray = processedString.split("").reverse().join("")
    // let nonalphabetArray = '!'
    // let reversedWord = ''
    if (reversedwordArray === processedString){
        return true
    }
    return false
    // for (let i = 0; i < reversedwordArray.length; i++){
    //     reversedWord += reversedwordArray[i]
    // }
    // for (let i = 0; i < wordArray.length; i++ ){
    //     for (let j = reversedwordArray.length; j <= 0; j--){
    //         if (wordArray[i] === reversedwordArray[j-1]){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // for (let i = wordArray.length-1; i >=0; i--){
    //     reversedWord += wordArray[i]
    // }
    // return reversedWord

    // for (let i =0; i < wordArray.length; i++){
    //     for (j = 0; j < reversedwordArray.length; j++){
    //         if (wordArray[i] === reversedwordArray[j]){
    //             return true
    //         }else{
    //             return false
    //         }
    //     }
    // }
};

// Do not edit below this line
module.exports = palindromes;
