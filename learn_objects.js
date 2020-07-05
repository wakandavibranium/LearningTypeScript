var person = {
    name: "John Doe",
    age: 230,
    hobbies: ["Lawn tennis", "Online gaming"]
};
console.log(person.name);
console.log(person.age);
var favouriteActivities;
favouriteActivities = ["Sports"];
console.log(favouriteActivities);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
