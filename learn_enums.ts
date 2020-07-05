enum Role {ADMIN = "ADMIN", READ_ONLY = 0, AUTHOR = "AUTHOR"};//Enums define a set of named constants

const employee = {
  name: "John Doe",
  age: 19,
  role: Role.ADMIN,
};

if (employee.role === Role.ADMIN) {
  console.log("Name: " + employee.name);
  console.log("Age: " + employee.age);
  console.log("Role: " + employee.role);
};
