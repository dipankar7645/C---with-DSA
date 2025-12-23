function SearchElement (arr,x){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == x)
            return i;
    }
    return -1;
}

let arr = [2,5,7,90,5]
let result = SearchElement(arr,99)

console.log(result)

// let arr = [3,4,5,6]
// console.log(arr.indexOf(5))
