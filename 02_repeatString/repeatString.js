const repeatString = function(string, num) {
    let randomstring = ''
    if (num == 0){
        return randomstring;
    } else if (num < 0){
        return 'ERROR'
    }
    for (let i = 0; i < num; i++){
        randomstring += string;

    }
    return randomstring;
};

// Do not edit below this line
module.exports = repeatString;
