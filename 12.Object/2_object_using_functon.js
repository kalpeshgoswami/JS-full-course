
function Hotel(rating, room, staff) {
    this.rating = rating,
        this.room = room,
        this.staff = staff
}

const Hotel1 = new Hotel(3, 10, 6);

console.log("Hotel 1 detail :", Hotel1);

const Hotel2 = new Hotel(5, 18, 10);

console.log("Hotel 2 detail :", Hotel2);