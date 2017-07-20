//Regular function

function foo(x){
    if(x>5) return x;
    else return 1;
}
console.log(foo(5)) // it will return 1

//With simple arrow function
var foo = x => x>5 ? x : 1;
console.log(foo(5)) // it will return 1
