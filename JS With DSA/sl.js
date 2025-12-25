function SecondLargest(arr){

    // if(arr.length < 2){
    //     return "null";
    // }

    let FirstLargest = -Infinity;
    let SecondLargest = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i] > FirstLargest){
            SecondLargest = FirstLargest;
            FirstLargest = arr[i]
        }else if(arr[i] > SecondLargest){
            SecondLargest = arr[i]
        }
    }
    return SecondLargest;
    // return FirstLargest;
}

let arr = [3,6,9,2,70,1,3,77,5]
let result = SecondLargest(arr)
console.log(result)