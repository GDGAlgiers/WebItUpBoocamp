// Basic types
let aNumber: number = 1                         // accepts only numerical values 
let aString: string = "some string"             // accepts only strings
let aBoolean: boolean = false                   // accepts only true or false
let aNull: null = null                          // accepts only null
let anUndefined: undefined = undefined          // accepts only undefined
let anAny: any = true                           // accepts all types like javascript

// Union
let aStringOrNumber: number | string            // it accepts strings or numbers
aStringOrNumber = "some string"
aStringOrNumber = 1

let aNumberOrNull: number | null                // it can be a number or null
aNumberOrNull = 2
aNumberOrNull = null

// Functions
let aFunction: Function                         // accepts only functions
aFunction = function(){}

function anotherFunction(a: number, b: number): number {
    return a + b                                // two arguments with a number type
}                                               // a return type of number
anotherFunction(1, 2)

function withOptionalArgument(a: number, b?: number): string {
    return a.toString()                         // a function with a return type of string
}
withOptionalArgument(1)                         // a function with an optional argument

// Arrays
let numbersArray: number[] = [1, 2, 3]          // accepts only numbers
let stringsArray: string[] = ["s1", "s2", "s3"] // accepts only strings

let numbersOrBooleans: (number | boolean) [] = []
numbersOrBooleans.push(1)                       // accepts numbers
numbersOrBooleans.push(true)                    // accepts booleans too

// Tuples
let stringNumberTuple: [string, number]         // first index must be a string
stringNumberTuple = ["some string", 1]          // second index must be a number

let stringBooleanTuple: [string, boolean]       // first index must be a string
stringBooleanTuple = ["some string", false]     // second index must be a boolean

// Objects
type nameAge = {                                // we can declare a type of objects with different keys and types
    name: string
    age: number
}

let nameAgeObject: nameAge = {
    name: "some name",
    age: 22
}

let anotherTypeObject: {name: string}           // we can declare a new type at the moment of the declaration of the variable
anotherTypeObject = {name: "some name"}

// Interfaces
interface SomeInterface {
    someThing: boolean                          // someThing here is necessary
    anotherThing?: number                       // anotherThing here is optional
}

let testInterface: SomeInterface
testInterface = { someThing: true }             // we need to someThing only
testInterface = {
    someThing: false,
    anotherThing: 3                             // we can add anotherThing later because it's optional
}

interface InterfaceWithFunction {
    someThing: boolean,
    someFunction(): void                        // the interface now has a function with a void return type
}

let functionInterface: InterfaceWithFunction
functionInterface = {
    someThing: true,
    someFunction: function(){}                  // we can put any function with a void return type
}

// Interfaces with Classes
interface Age {
    age: number                                 // an attribute that will be added in the classes
}

class Person implements Age {                   // Person class uses Age interface
    fullName: string
    age: number                                 // it's necessary to add an age attribute

    constructor(fullName: string, age: number){
        this.fullName = fullName                // initializing fullName attribute
        this.age = age                          // initializing age attribute
    }
}

class Animal implements Age {                   // Animal class uses Age interface
    name: string
    age: number                                 // it's necessary to add an age attribute here too

    constructor(name: string, age: number){     // a constructor is a function called while initializing the object
        this.name = name                        // initializing name attribute
        this.age = age                          // initializing age attribute
    }
}

let somePerson: Person
somePerson = new Person("full name here", 22)

let someAnimal: Animal
someAnimal = new Animal("animal name here", 7)

let ageArray: Age[] = []
ageArray.push(somePerson)                       // we can push an object of type Person because it implements Age
ageArray.push(someAnimal)                       // same thing for objects with type Animal

// Classes
class Human {
    public name: string
    private age: number                         // age is private so it's accessible only inside the class
    protected livingPlace: string               // livingPlace is protected so it's accesible by child classes

    constructor(name: string, age: number, livingPlace: string){
        this.name = name
        this.age = age
        this.livingPlace = livingPlace
    }

    getAge() {                                  // age is private so we should use a getter to get its value from outside
        return this.age
    }

    setAge(age: number) {                       // age is private so we should use a setter to set a new value
        this.age = age
    }
}

class Agent extends Human {                     // Agent inherits everything from Human class
    workingPlace: string

    constructor(name: string, age: number, livingPlace: string, workingPlace: string){
        super(name, age, livingPlace)           // Agent calls the constructor of the parent class using super
        this.workingPlace = workingPlace
    }

    getAge2(){
        return super.getAge()                   // age is private so Agent calls getAge of the parent class using super
    }

    getLivingPlace(){
        return this.livingPlace                 // living is accesible because it's protected
    }
}

let someHuman: Human
someHuman = new Human("name", 1, "place")       // creating a new object of type Human with three arguments

let someAgent: Agent
someAgent = new Agent("n", 1, "p1", "p2")       // creating a new object of type Agent with four arguments

// Enums
enum Wilayas {                                  // enum is a structure with limited and fixed values
    Alger,
    Oran,
    Annaba
}

let wilaya: Wilayas                             // here we can declare a variable of an enum type
wilaya = Wilayas.Annaba                         // we can give it any value from the values of the enum

console.log(Wilayas.Alger)                      // here we will get a value of 0 by default
console.log(Wilayas.Oran)                       // the value here is 1
console.log(Wilayas.Annaba)                     // the value here is 2

enum otherWilayas {                             // the value is numerical by default and starts by 0
    Alger = "alger",                            // we can specify the equivalent value
    Oran = "oran",                              // if we specify it by a string we should specifiy it for the other values too
    Annaba = "annaba"
}

// Generics
let person = {name: "name"}

function addAge1(obj: object) {
    return {...obj, age: 21}
}

let newPerson1 = addAge1(person)                // newPerson1 can't access to name property

function addAge2<T>(obj: T) {                   // the function detects the type of the passed object
    return {...obj, age: 21}                    // the return type is an object of type T which is flexible with age property
}

let newPerson2 = addAge2(person)                // now newPerson2 can access to name propety

interface GenericTest <T> {                     // we use generics in interfaces to specify a property with a flexible type
    someNumber: number
    someThing: T
}

let genericTest1: GenericTest<number>           // here someThing is a number
genericTest1 = {
    someNumber: 1,
    someThing: 2
}

let genericTest2: GenericTest<boolean>          // here someThing is a boolean
genericTest2 = {
    someNumber: 1,
    someThing: false
}

// Modules
import {someType, someFunction} from "./module"  // we are importing someType and someFunction which are in another file

let someTypeTest: someType = {
    someThing: 2
}

someFunction()