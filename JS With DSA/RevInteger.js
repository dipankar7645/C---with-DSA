function ReverseInteger(n){
    let rev = 0;
    let num = Math.abs(n);

    while (num > 0) {
      let rem = num % 10;
      rev = rev * 10 + rem;
      num = Math.floor(num / 10);
    }

    return n < 0 ? -rev : rev;

    //  if (num < 0) {
    //    return -rev;
    //  } else {
    //    return rev;
    //  }
}

let num = -123;
let result = ReverseInteger(num)
console.log(result)
