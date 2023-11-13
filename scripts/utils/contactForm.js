
const firstName = document.getElementById("prenom");
const lastName = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
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
        const firstNameStatus = champs(firstName, /^[a-zA-Z]{4,}$/, "il doit y avoir minimum 4 lettre", "test")
        return firstNameStatus
    }

    function handleInput() {
        const isDisabled = !checkInputs();
        disableSubmit(isDisabled);
    }

    handleInput()
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