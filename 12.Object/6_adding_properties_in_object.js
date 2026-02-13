const person = {
    name: "kalpesh",
    surname: "goswami",
    city: "bvn",
    age: "20"
};

person.designation = "full stack developer";

console.log(person);

person["bloodGroup"] = "A";

console.log(person);


function Hotel(rating, room, staff) {
    this.rating = rating,
        this.room = room,
        this.staff = staff
}

Hotel.prototype.swimmingPool = true

const Hotel1 = new Hotel(2, 10, 5);

console.log("Hotel 1 detail :", Hotel1.swimmingPool);