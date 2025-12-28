function Palindrome(num){
    if(num < 0) return false;
    let n = num;
    let rev = 0;
    while(num>0){
        let rem = num%10;
        rev = (10*rev)+rem
        num = Math.floor(num/10);
    }
    if(rev == n){
        return true;
    }else{
        return false;
    }
}
let num = 1234;
let result = Palindrome(num)
console.log(result)