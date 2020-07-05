var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
; //Enums define a set of named constants
var employee = {
    name: "John Doe",
    age: 19,
    role: Role.ADMIN
};
if (employee.role === Role.ADMIN) {
    console.log("Name: " + employee.name);
    console.log("Age: " + employee.age);
    console.log("Role: " + employee.role);
}
;
