/**
 * Created by kk on 21/7/17.
 */
function foo(x){
    x = x || 42;
    console.log(x);
}

console.log(foo(0));  //42
console.log(foo(null));  //42
console.log(foo(undefined));  //42
console.log(foo(5));  //5

