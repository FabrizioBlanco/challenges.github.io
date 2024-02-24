const button = document.querySelector("button")
const container = document.getElementById("mainContainer")
const secundaryContainer = document.getElementById("secundaryContainer")
const email = document.getElementById("input")
const emailText = document.getElementById("emailText");
const invalid = document.getElementById("invalidMessage");



button.addEventListener("click", (event) => {
    event.preventDefault();
    if (isValidEmail(email.value)) {
        container.style.display="none"
        secundaryContainer.style.display = "flex";
        emailText.textContent = email.value;
        invalid.style.display = "none";
    } else {
        invalid.removeAttribute("hidden")       
        email.setAttribute("id", "invalidInput")


    }
});
const dissmissButton = document.getElementById("dissmissButton")
const subscribeForm = document.querySelector(".container__mail");
dissmissButton.addEventListener("click", () => {
    subscribeForm.reset();
    container.style.display = "flex"
    secundaryContainer.style.display = "none"
})
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}