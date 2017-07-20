var obj = {
    id: 42,
    foo: function foo() {
        var self = this;
        setTimeout(function(){
            console.log( self.id );
        },1000)
    }
}
obj.foo(); // It will get 42