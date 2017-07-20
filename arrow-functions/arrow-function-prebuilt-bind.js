var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(function(){
            console.log( this.id );
        },1000)
    }
}
obj.foo(); // It will get undefined