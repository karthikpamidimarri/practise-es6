var obj = {
    id: 42,
    foo: function foo() {

        setTimeout(function(){
            console.log( this.id );
        }.bind(this),1000)
    }
}
obj.foo(); // It will get 42