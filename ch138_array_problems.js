function printReverse(array) {
    for(var i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

printReverse([1,2,3,4]);

// Bad logic, only exits the first function, so always returns true
// function isUniform(array) {
//     var first = array[0];
//     array.forEach(function(spot) {
//         console.log(spot, first);
//         if(spot !== first) {
//             return false;
//         }
//     })
//     return true;
// }

function isUniform(array) {
    var first = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] !== first) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([2,1,1,1]));
console.log(isUniform([1,1,1,1]));


function sumArray(array) {
    var sum = 0;
    array.forEach(function(element) {
        sum += element;
    })
    return sum;
}

console.log(sumArray([1,2,3,4]));

function max(array) {
    var max = array[0];
    array.forEach(function(element) {
        if(element > max) {
            max = element;
        }
    })
    return max;
}

console.log(max([5,-100,13,7]));