const username = document.querySelector("input[placeholder='Username']");
const email = document.querySelector("input[placeholder='Email']");
const password = document.querySelector("input[placeholder='Password']");
const dob = document.querySelector("input[placeholder='DOB']");
const colorInput = document.getElementById("colorInput");
const petRadios = document.querySelectorAll("input[name='pet']");

function getPet() {
    let chosenPet = "";
    petRadios.forEach(radio => {
        if (radio.checked) {
            chosenPet = radio.value;
        }
    });
    return chosenPet;
}

submitBtn.addEventListener("click", function () {
    const userValue = username.value;
    const emailValue = email.value;
    const passValue = password.value;
    const dobValue = dob.value;
    const colorValue = colorInput.value;
    const petValue = getPet();

    output.innerHTML = 'Username: ' + userValue + 'Email: ' + emailValue + 'Password: ' + passValue + 'DOB: ' + dobValue + 'Favorite Color: ' + colorValue + 'Favorite Pet: ' + petValue;

});
