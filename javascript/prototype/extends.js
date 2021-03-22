function Foo(name) {
    this.name = name;
}
Foo.prototype.getName = function() {
    console.log(`my name is ${this.name}`)
}
function Bar(name) {
    this.name = name;
}
Bar.prototype.__proto__ = Foo.prototype;
Bar.prototype.constructor = Foo;
let bar = new Bar('bar');
bar.getName();