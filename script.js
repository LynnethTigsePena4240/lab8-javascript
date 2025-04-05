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

console.log("New property graduatinoYear of cloned student obj:");
let student2 = {...student}
student2.graduationYear = 2025
console.log(student2);

console.log("Merged two courses arrays:");
student2.courses = ["database","algorithm"]
let combindStudent = [...student.courses, ...student2.courses]
console.log(combindStudent);


//Part 5: Object Methods
console.log("--------Part 5: Object Methods--------");

student2.addCourses = function(courseName)
{
    this.courses.push(courseName)
}

student2.totalCourses = function()
{
    console.log(`total number of courses is ${this.courses.length}`);
}

student2.average = function()
{
    let sum = 0
    let average = 0
    let total_num = this.scores.length
    for (let i=0;i<this.scores.length;i++)
    {
        sum += this.scores[i]
    }
    average = sum/total_num
    console.log(average);
}

console.log("orignal course array:");
console.log(student2.courses);

console.log("\ndynamically added 'java' into the course array:");

student2.addCourses("java")
console.log(student2.courses);
student2.totalCourses()

console.log("average grade:");
student2.average()