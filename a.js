var name = 'jay';

function Person(name) {
    this.name = name
    console.log(this.name);
}

var a = Person('Tom')
console.log(name);
console.log(a);
var b = new Person('Michael')
console.log(b);