function multiplyAll(
    values: number[] | undefined,
    factor: number
  ): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map((x) => x * factor);
    }
  }

function doSomething(pair: [string, number]){
  console.log(pair[0])
  console.log(pair[1])
}
doSomething(["ello", 20])

type Either2Or3d = [number, number, number?]
let coord : Either2Or3d = [3, 7]

interface Lengthwise {
  length: number
}
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg
}
console.log(loggingIdentity("Cringe"))

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
function identity<Type>(arg: Type): Type {
  return arg
}
 
let myIdentity: GenericIdentityFn = identity;

class GenericNumber<NumType> {
  zeroValue?: NumType
  add?: (x: NumType, y: NumType) => NumType
}
 
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
};
console.log(myGenericNumber.add(7, 3))

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ""
stringNumeric.add = function (x, y) {
  return x + y
}
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"))

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, "a")
//getProperty(x, "m");      Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

type Person = { age: number; name: string; alive: boolean }
type Age = Person["age"]
type I1 = Person["age" | "name"]
type I2 = Person[keyof Person]
type AliveOrName = "alive" | "name"
type I3 = Person[AliveOrName]
//type I4 = Person["alve"];     Property 'alve' does not exist on type 'Person'.

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
type Someone = typeof MyArray[number];
type SomeonesAge = typeof MyArray[number]["age"];
type SomeonesAge2 = Someone["age"]

class Point {
  x = 0
  y: number = 0
}
const pt = new Point()
// pt.x = '0'    Type 'string' is not assignable to type 'number'
pt.y = 0

class BadGreeter {
//  name: string;     Property 'name' has no initializer and is not definitely assigned in the constructor.
}
class OKGreeter {
  // Not initialized, but no error
  name!: string
}
class GoodGreeter {
  name: string
  constructor() {
    this.name = "hello"
  }
}

class Point2 {
  x: number
  y: number
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
}
class Point3 {
  // Overloads
  constructor(x: number, y: string)
  constructor(s: string)
  constructor(xs: any, y?: any) {
    // TBD
  }
}

let variable: number = 0
class C {
  variable: string = "hello"
  meth() {
    // This is trying to modify 'x' from line 1, not the class property
    this.variable = "world"
  }
}

class Thing {
  _size = 0
  get size(): number {
    return this._size
  }
  set size(value: string | number | boolean) {
    let num = Number(value)
    // Don't allow NaN, Infinity, etc
    if (!Number.isFinite(num)) {
      this._size = 0
      return
    }
    this._size = num
  }
}

interface Pingable {
  ping(): void
}
class Sonar implements Pingable {
  ping() {
    console.log("ping!")
  }
}
/*class Ball implements Pingable {    Class 'Ball' incorrectly implements interface 'Pingable'.
    pong() {                          Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    console.log("pong!");
  }
}*/

interface Checkable {
  check(name: string): boolean
}
/*class NameChecker implements Checkable {
  check(s) {                                //Parameter 's' implicitly has an 'any' type.
    // Notice no error here even though
    return s.toLowercse() === "ok"
  }
}*/

interface A {
  x: number
  y?: number
}
class Cl implements A {
  x = 0
}
const c = new Cl()
//c.y = 10                    Property 'y' does not exist on type 'Cl'.

class Animal {
  move() {
    console.log("Moving along!");
  }
}
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
const d = new Dog();
// Base class method
d.move()
// Derived class method
d.woof(3)