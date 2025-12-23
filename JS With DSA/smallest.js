function SmallestNumber(){
    let Smallest = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < Smallest){
            Smallest = arr[i]
        }
    }
    return Smallest;
}

let arr = [3,5,7,0,-3,-8,1,-6]
// let arr = [4,6,8,9,1,6]
let res = SmallestNumber(arr)
console.log(res)