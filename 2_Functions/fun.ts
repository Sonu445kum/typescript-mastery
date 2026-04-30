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