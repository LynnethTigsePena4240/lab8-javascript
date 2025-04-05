// part 1 Understanding and Creating Objects
console.log("--------Part 1 Understanding and Creating Objects--------");
let student = {
    name: "John",
    age: 25,
    enrolled: true,
    courses: ["operating sys","javascript","web development"],
    info: function()
    {
        console.log(`student's name: ` + this.name);
        console.log("student's age: " + this.age);
        console.log("Is the student enrolled: " + this.enrolled);
        console.log(("students courses: " + this.courses));
    }
}
console.log(`student's name: ${student.name} \nstudent's age: ${student.age}`);
console.log("calling the method:");
student.info()




//Part 2: Working with JSON
console.log("--------Part 2: Working with JSON--------");
console.log("JSON string form:");

let studentJSON = '{"name": "John","age": 25,"enrolled": true,"courses": ["operating sys","javascript","web development"]}'
console.log(studentJSON);
console.log("\n");

console.log("javascript object form:");

let jsonObj = JSON.parse(studentJSON)
console.log(jsonObj);


//Part 3: Using Destructuring Assignment
console.log("--------Part 3: Using Destructuring Assignment--------");

console.log("extracted name and courses properties:");
let {name, courses} = student
console.log(name);
console.log(courses);

console.log("logging the first 2 scores from the array:");
student.scores = [90,80,100,75]
let [first,second,third,fourth] = student.scores
console.log(first,second);


//Part 4: The Spread Operator
console.log("--------Part 4: The Spread Operator---------");


//Part 5: Object Methods
console.log("--------Part 5: Object Methods--------");

