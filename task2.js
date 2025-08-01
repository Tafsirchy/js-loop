let currentNumber = 1;

let sum = 0;

while(true){
    sum = sum + currentNumber;

    if(sum >= 100){
        console.log(sum);
        console.log(currentNumber);
        break;
    }
    currentNumber++;
    
}