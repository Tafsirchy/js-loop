 // odd numbers

//  for(let i = 0; i <=20; i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
//  }

//  for(let i = 0; i <=20; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//  }

//  for(let i = 1; i <=20; i += 2){
//     console.log(i);
//  }

//  let i = 1;
//  while(i <= 20){
//     console.log(i);
//     i += 2;
//  }
// give me the number 1 to 30 which is divisible by 3

// for(let i = 1; i<= 30; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i<= 30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i<= 30; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log(i);
//     }
// }

// for(let i = 1; i<= 30; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

// give me the sum of numbers that are divisible by 3 and 5 from 1=20

// let sum = 0;
// for(let i = 1; i<= 20; i++){
//     if(i % 3 === 0){
//         console.log(i);
//         sum += i;
//         console.log('sum',sum);
//     }
// }
// console.log("Sum of number is: ",sum);

let sum = 0;
for(let i = 1; i<= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
        sum += i;
        console.log('sum',sum);
    }
}
console.log("Sum of number is: ",sum);