var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(() =>
            console.log( this.id )
            ,1000)
    }
}
obj.foo(); // It will get 42