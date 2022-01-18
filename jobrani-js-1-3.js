const b = [1, 2, 3, 4, 5 ,4];


//for loop

// let j=0;
// for(let i = 0 ; i<b.length ; i++){
//     j =  j + b[i]
// }
// console.log(j);

//while loop

// let i = 0;
// let j = 0;
// while(i<b.length){
//     j =  j + b[i];//j+=b[i]
//     i++;
// }
// console.log(j);


// let j =0
// let i = b.length;
// while(i > 0){
//     i--;
//     j += b[i];
// }
// console.log(j);


//for of
// let sum = 0;
// for(let element of b){
//     sum += element // sum =  sum + element 
// }
// console.log(sum);

// for(let i = 1;i<=6; i++){
//     console.log("hi");
// }

// for(let i=0 ; i<=20 ; i+=2){
//     console.log(i);
// }

// console.log(i);

// for (let i = 25; i >= 0; i -=5) {
//   console.log(i);
// }


// const animals= ["lion" , "camel" , "rabbit" , "turtle"]
// for(let index of animals){
//   console.log(index);
// }
// for(let i = animals.length-1 ;i >= 0;i-- ){
//   console.log(animals[i].toUpperCase());
// }
// let a = animals.map((element) =>{
//  return element.toUpperCase();
// })
// console.log(a);

//0 1 2 3
//0 1 2
// for(let i = 0 ; i <= animals.length-1 ;i++){
//     console.log(` ${i}-${animals[i]}`);
// }

// const airplane = [
//   ["niloofar", "kosar", "Fatemeh"],
//   ["ali", "mohsen", "Shirin"],
//   ["atena", "mahdi", "benyamin"],
//   ["bani", "mohammad", "sina"],
//   ["Amir", "Beti", "Pourya"],
// ];

// for(let i = 0 ; i<airplane.length ; i++){
//     console.log(airplane[i]);
//     for(let j = 0 ; j<airplane[i].length;j++){
//         console.log(airplane[i][j]);
//         if( j === 1){
//             break;
//         }
        
        
//     }
// }

// const array = [1,2,3,4,5,6,7];
// for(let element of array){
//     console.log(element ** 2); 
// }

// array.forEach(x =>console.log(x));
// console.log(array.reverse().map(x=> {
//    return x ** 2;
// })); 

// const arr =["  ali   " , "kian    " ,"  mahdie       " ]
// let result = arr.map(element=>element.trim())
// console.log(result);

let func = (name) => "Hey" + " " + name;

console.log(func("harry")); 