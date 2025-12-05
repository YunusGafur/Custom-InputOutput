const username = document.querySelector("input[placeholder='Username']");
const email = document.querySelector("input[placeholder='Email']");
const password = document.querySelector("input[placeholder='Password']");
const dob = document.querySelector("input[placeholder='DOB']");
const colorInput = document.getElementById("colorInput");
const petRadios = document.querySelectorAll("input[name='pet']");

const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

function getPet() {
    let pet = "";
    petRadios.forEach(radio => {
        if (radio.checked) {
            pet = radio.value;
        }
    });
    return pet;
}

submitBtn.addEventListener("click", function () {
    output.innerHTML =
        "Success! " + password.value + "<h2> " +
        "Username: " + username.value + "<br> " +
        "Email: " + email.value + "<br> " +
        "DOB: " + dob.value + "<br> " +
        "Favorite Color: " + colorInput.value + "<br> " +
        "Favorite Pet: " + getPet();
});
