class Student {
    constructor(name, grId, course, address) {
        this.name = name;
        this.grid = grId;
        this.course = course;
        this.address = address;
    }
}

const Student1 = new Student("Aarav", 1, "FD", "Bhavnagar");

const Student2 = new Student("Dev", 2, "AI", "Rajkot");

const Student3 = new Student("Ishaan", 3, "IT", "Ahmadabad");

console.log("student 1 :",Student1);

console.log("student 2 :",Student2);

console.log("student 3 :",Student3);