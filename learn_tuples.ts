const student: {
  name: string; //Defines the identifier should be a String
  age: number; //Defines the identifier should be a Number
  hobbies: string[]; //Defines the identifier should be an Array of Strings
  role: [number, string]; //Defines the identifier should be a Tuple of mixed data type and of size 2
} = {
  name: "Jason Doe", //String
  age: 18, //Number 
  hobbies: ["Swimming", "Drag racing"], //Array
  role: [2, "Author"] //Tuple 
};

console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("Hobbies: " + student.hobbies);
console.log("Role: " + student.role.push("Admin"));//Add element to a Tuple
console.log("Role: " + student.role);

