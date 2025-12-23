function NegativeNumber(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count = count + 1;
        }
    }
    return count;
}

let arr = [4,3,6,8,8,4,7];
let res = NegativeNumber(arr);
console.log(res)