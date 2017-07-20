/**
 * Created by kk on 20/7/17.
 */
function foo(x,y){
    if(x>y){
        let tmp = x;
        x = y;
        y = tmp;

        let tmp = y;
        console.log(tmp);
    }
    console.log(tmp+"outside");
    for(let i=0; i<10; i++){
        console.log(i);
    }
    console.log(i+"outside");
}

foo(8,6) //tmp is not defined


function foo(x,y){
    if(x>y){
        var tmp = x;
        x = y;
        y = tmp;

        console.log(tmp);
    }
    console.log(tmp+"outside");
    for(var i=0; i<10; i++){
        console.log(i);
    }
    console.log(i+"outside");
}

foo(8,6)  /*
  8
  8outside
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
 10outside*/