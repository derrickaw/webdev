function isEven(x) { 
    return x % 2 === 0;
}

function factorial(x) { 
    if(x === 0) { 
        return 1;
    } else {
        return x * factorial(x - 1);
    }
    // Could use a for loop instead of a recursive function
}

function kebabToSnake(str) { 

    return str.replace(/-/g, '_')

    // var newStr = ""
    // for(var i = 0; i < str.length; i++) { 
    //     if(str[i] === "-") {
    //         newStr += "_";
    //     } else {
    //         newStr += str[i];
    //     }
    // }
    // return newStr;
}