
//creates object "Student"
    let student = {
    name: "Eduardo",
    age: 24,
    enrolled: true,
    courses: ["Science", " Cooking", " Math", " History"],

    //function to display student information
    displayInfo: function() {
        console.log("Student name: " + this.name);
        console.log("Student age: " + this.age);
        console.log("Is student enrolled?: " + this.enrolled);
        console.log("Current courses: " + this.courses);
    }

}

console.log(student.name);
console.log(student.age);
student.displayInfo(); //calls function to display info


let jsonString = JSON.stringify(student); //converts JavaScript object to JSON string
console.log(jsonString); //displays JSON string

let javaObj = JSON.parse(jsonString); //converts JSON string to JavaScript object
console.log(javaObj);


//uses destructuring to extract students name and courses
let {name, courses} = student;
console.log(name);
console.log(courses);


//creates array called "scores", destructures and logs to console
let scores = [35, 94, 29, 65];
let [firstScore, secondScore, thirdScore, fourthScore] = scores;
console.log(firstScore);
console.log(secondScore);


//copies "student" object with spread operator
let copiedStudent = {...student};

