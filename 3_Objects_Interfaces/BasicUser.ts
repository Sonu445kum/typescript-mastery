// Basic user interface
interface User {
    name :string;
    age : number;
}

const user :User ={
    name :"Sonu",
    age : 34
}

// Optional Properties
interface Product {
    name :string;
    price : number;
    discount? : number
}

const item : Product = {
    name :"Laptop",
    price : 30000,
    
}

