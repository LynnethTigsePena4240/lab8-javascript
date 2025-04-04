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

//Part 3: Using Destructuring Assignment
console.log("--------Part 3: Using Destructuring Assignment--------");


//Part 4: The Spread Operator
console.log("--------Part 4: The Spread Operator---------");


//Part 5: Object Methods
console.log("--------Part 5: Object Methods--------");

