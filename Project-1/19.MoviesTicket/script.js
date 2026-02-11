document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const ticketPrice = parseFloat(document.getElementById("ticketType").value);
    const ticketQuantity = parseInt(document.getElementById("ticketQuantity").value);

    const result = document.getElementById("result");

    if (isNaN(ticketPrice) || ticketPrice <= 0) {
        result.textContent = "Please select a valid ticket type!";
        return;
    }

    if (isNaN(ticketQuantity) || ticketQuantity <= 0) {
        result.textContent = "Please enter a valid number of tickets!";
        return;
    }

    const totalPrice = ticketPrice * ticketQuantity;

    result.textContent = `The total movie ticket price is ₹${totalPrice.toFixed(2)}.`;
});
