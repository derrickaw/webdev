function isEven(x) { 
    if(x % 2 === 0) { 
        return true; 
    } 
    return false; 
}

function factorial(x) { 
    if(x === 0) { 
        return 1
    } else {
        return x * factorial(x - 1) 
    }
}

function kebabToSnake(str) { 
    var newStr = ""
    for(var i = 0; i < str.length; i++) { 
        if(str[i] === "-") {
            newStr += "_";
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}