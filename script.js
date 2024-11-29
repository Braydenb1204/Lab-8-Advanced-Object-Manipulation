
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