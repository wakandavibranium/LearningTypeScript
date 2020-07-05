const person = {
    name: "John Doe",
    age: 230,
    hobbies: ["Lawn tennis","Online gaming"]
}

console.log(person.name);
console.log(person.age);

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(favouriteActivities);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}