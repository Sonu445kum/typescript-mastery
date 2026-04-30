// syntax of functions in the typescript

// function add(a:number , b:number) : number {
//     return a+b;
// }
// console.log(`sum of Two Number:`,add(4,5));

// 2. Function Type Inference 
// function greet(name:string){
//     return `Hello` + name;
// }
// console.log(greet("Sonu"));

// 3. Arrow Functions
// const multiply = (a:number , b : number): number=>a*b;
// console.log(`Multiply :`,multiply(2,4));

// 4. Optional Parameters
// function  greetUser(name:string , age? :number):string{
//     return age ? `Hello: ${name} ,age :${age}` :`Hello:${name}`
// };
// console.log(greetUser("Sonu" , 23));

// 5. Default Parameters
// function greeUser(name:string = "Sonu") : string {
//     return `Welcome ${name}`;
// }
// // default output print
// console.log(greeUser());
// console.log("Pass prameter:",greeUser("jai Shree Ram"));

// 6. Rest Parameters
// function sum(...nums: number[]):number{
//     return nums.reduce((acc ,curr)=>acc + curr ,0);
// }
// console.log("The Total Sum is:",sum(1,2,3,4,5));

// Void Return Type
// function logMessage(name:string) : void {
//     console.log(name);
// }
// logMessage("sonu");

// 8. Function Type
//  let addNum  : (a:number , b :number)=>number;
//  addNum =(x , y)=> x+y;
//  console.log(addNum(3,5));

// Union Types in Functions
// function printId(id:number | string) {
//     console.log(id);
// }
// printId(34);
// printId("23");

// Function Overloading
// function combine(a:number , b:number):number;
// function combine(a:string , b:string) :string;
// function combine(a:any , b :any):any{
//     return a+b;
// }
// console.log("Sum of a and b :",combine(4,5));

// Real world Examples:
type User = {
    name :string,
    age: number,

}
function greetUser(user:User):string{
    return `User:${user.name}  }created`
}
const user1 : User= {
    name:"Sonu",
    age:23
}

// console.log(greetUser(user1));
console.log(greetUser({ name: "Sonu", age: 22 }));