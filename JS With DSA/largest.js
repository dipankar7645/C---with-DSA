// function LargestNumber(arr){
//     let Largest = 0;
//     for(let i=0; i<arr.length; i++){
//         if (arr[i] > Largest) {
//           Largest = arr[i];
//         }
//     }
//     return Largest;
// }

// let arr = [2,5,8,33,56,78,3,4,1,99]
// let res = LargestNumber(arr)
// console.log(res)


function LargestNumber(arr) {
  let Largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Largest) {
      Largest = arr[i];
    }
  }
  return Largest;
}

let arr = [-2, -5, -8, -33, -56, -78, -3, -4, -99];
let res = LargestNumber(arr);
console.log(res);