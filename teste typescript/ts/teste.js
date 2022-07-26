function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => x * factor);
    }
}
function doSomething(pair) {
    console.log(pair[0]);
    console.log(pair[1]);
}
doSomething(["ello", 20]);
let coord = [3, 7];
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity("Cringe"));
function identity(arg) {
    return arg;
}
let myIdentity = identity;
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(7, 3));
let stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
//type I4 = Person["alve"];     Property 'alve' does not exist on type 'Person'.
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt = new Point();
// pt.x = '0'    Type 'string' is not assignable to type 'number'
pt.y = 0;
class BadGreeter {
}
class OKGreeter {
}
class GoodGreeter {
    constructor() {
        this.name = "hello";
    }
}
class Point2 {
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class Point3 {
    constructor(xs, y) {
        // TBD
    }
}
let variable = 0;
class C {
    constructor() {
        this.variable = "hello";
    }
    meth() {
        // This is trying to modify 'x' from line 1, not the class property
        this.variable = "world";
    }
}
class Thing {
    constructor() {
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        // Don't allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
class Sonar {
    ping() {
        console.log("ping!");
    }
}
class Cl {
    constructor() {
        this.x = 0;
    }
}
const c = new Cl();
//c.y = 10                    Property 'y' does not exist on type 'Cl'.
class Animal {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
class Base {
    greet() {
        console.log("Hello, world!");
    }
}
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const derivedClass = new Derived();
derivedClass.greet();
derivedClass.greet("reader");
class BaseTest {
    constructor() {
        this.x = 5;
    }
    showX() {
        console.log(this.x);
    }
}
const b = new BaseTest();
//console.log(b.x);           Can't access from outside the class
b.showX();
class DerivedTest extends BaseTest {
}
class A1 {
    constructor() {
        this.x = 10;
    }
    sameAs(other) {
        return other.x === this.x;
    }
}
class MySafe {
    constructor() {
        this.secretKey = 12345;
    }
}
const s = new MySafe();
// Not allowed during type checking
//console.log(s.secretKey);           Property 'secretKey' is private and only accessible within class 'MySafe'.
// OK
console.log(s["secretKey"]);
class MyClass {
    static printX() {
        console.log(MyClass.x);
    }
}
MyClass.x = 0;
console.log(MyClass.x);
MyClass.printX();
class MyClass2 {
}
MyClass2.x = 0;
//console.log(MyClass2.x);          Property 'x' is private and only accessible within class 'MyClass2'
class MyClass3 {
    constructor() {
        this.name = "MyClass";
    }
    getName() {
        return this.name;
    }
}
const cc = new MyClass3();
const obj = {
    name: "obj",
    getName: cc.getName,
};
// Prints "obj", not "MyClass"
console.log(obj.getName());
