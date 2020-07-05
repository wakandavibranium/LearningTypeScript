var student = {
    name: "Jason Doe",
    age: 18,
    hobbies: ["Swimming", "Drag racing"],
    role: [2, "Author"] //Tuple 
};
console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("Hobbies: " + student.hobbies);
console.log("Role: " + student.role.push("Admin")); //Add element to a Tuple
console.log("Role: " + student.role);
