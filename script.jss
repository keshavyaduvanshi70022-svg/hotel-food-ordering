const orderForm = document.getElementById("orderForm");
const message = document.getElementById("message");

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;

    message.textContent =
        "Thank you " + name + "! Your order for " +
        quantity + " " + food + " has been placed successfully.";

    orderForm.reset();
});