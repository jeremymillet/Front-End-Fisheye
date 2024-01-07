
const firstName = document.getElementById("first-name-input");
const lastName = document.getElementById("last-name-input");
const email = document.getElementById("email-input");
const message = document.getElementById("message-input");
const closeImgModal = document.querySelector(".modal-img-container img");

closeImgModal.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        closeModal();
    }
});

const form = document.querySelector("#contact_modal form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value)
    console.log(email.value)
    console.log(message.value)
});

function displayModal() {
    const modal = document.getElementById("contact_modal");
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "flex";
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    modal.style.display = "none";
}


function champs(input,regex,errorMessage,errorMessageClassName) {
    const status = regex.test(input.value);
  if (status) {
    document.getElementsByClassName(errorMessageClassName)[0].innerText = ""
  }
  else {
    document.getElementsByClassName(errorMessageClassName)[0].innerText = errorMessage
  }
  return status
}

function setSubmitButton() {
    function checkInputs() {
        const firstNameStatus = champs(firstName, /^[a-zA-Z]{4,}$/, "Il doit y avoir minimum 4 lettre.", "first-name-info");
        const lastNameStatus = champs(lastName, /^[a-zA-Z]{1,}$/, "Ce champ doit être remplie avec votre nom.", "last-name-info")
        const emailStatus = champs(email, /@/, "Ce champ doit contenir une adresse mail valide.", "email-info")
        const messageStatus = champs(message, /^.{10,}$/,"Ce champ doit votre message.","message-info")

        return firstNameStatus && lastNameStatus && emailStatus && messageStatus
    }

    function handleInput() {
        const isDisabled = !checkInputs();
        disableSubmit(isDisabled);
    }

    firstName.addEventListener("input", handleInput);
    lastName.addEventListener("input", handleInput);
    email.addEventListener("input", handleInput);
    message.addEventListener("input", handleInput);

}

function disableSubmit(disabled) {
    if (disabled === true) {
        document
            .getElementById("contact_button_submit")
            .setAttribute("disabled", true);
    } else {
        document
            .getElementById("contact_button_submit")
            .removeAttribute("disabled");
    }
}

setSubmitButton()