// let n=4;
// for(let i=0; i < n; i++){
//     let row = " ";
//     for(let j=0; j<n; j++){
//         row = row +  "*";
//     }
//     console.log(row)
// }

// let n = 4;
// for(let i=0; i<n; i++){
//     let row = "";
//     for(let j=0; j<i+1; j++){
//         row = row + "*"
//     }
//     console.log(row)
// }

// let n =5;
// for(let i=0; i<n; i++){
//     let row = "";
//     for(let j=0; j<=i; j++){
//         row = row + (j+1);
//     }
//     console.log(row)
// }

// let n = 5;
// for(let i=0; i<n; i++){
//     let row = ""
//     for(let j=0; j<=i; j++){
//         row = row+(i+1);
//     }
//     console.log(row)
// }

// let n = 5;
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + (i);
//   }
//   console.log(row);
// }

// let n = 5;
// for(let i=0; i<n; i++){
//     let row = ""
//     for(let j=0; j< n-i; j++){
//         row= row+(j+1)
//     }
//     console.log(row)
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

let n = 5;
for(let i=0; i < n; i++){
    let row = "";
    for(let j=0; j < n-(i+1); j++){
        row = row+" "
    } 
    for(let k=0; k<i+1; k++){
        row = row+"*"
    }
    console.log(row)
}