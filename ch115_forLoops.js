console.log("Print all numbers between -10 and 19");
for(var num = -10; num <= 19; num++) {
    console.log(num);
}


console.log("Print all even numbers between 10 and 40");
for(var num = 10; num <= 40; num++) {
    if(num % 2 === 0) {
        console.log(num);
    }
}


console.log("Print all odd numbers between 300 and 333");
for(var num = 300; num <= 333; num++) {
    if(num % 2 === 1) {
        console.log(num)
    }
}


console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
num = 5;
for(var num = 5; num <= 50; num++) {
    if(num % 15 === 0) {
        console.log(num);
    }
}