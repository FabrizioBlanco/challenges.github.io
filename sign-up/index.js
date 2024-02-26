const button = document.querySelector("button")
const container = document.getElementById("mainContainer")
const secundaryContainer = document.getElementById("secundaryContainer")
const email = document.getElementById("input")
const emailText = document.getElementById("emailText")
const invalid = document.getElementById("invalidMessage")
const img = document.getElementById("img")

window.addEventListener('resize', function () {
    if (window.innerWidth >= 375) {
        img.setAttribute("src", "assets/images/illustration-sign-up-desktop.svg")
    } else {
        img.setAttribute("src", "assets/images/illustration-sign-up-mobile.svg")
    }
})

button.addEventListener("click", (event) => {
    event.preventDefault()
    if (isValidEmail(email.value)) {
        container.style.display = "none"
        secundaryContainer.style.display = "flex"
        emailText.textContent = email.value

    } else {
        invalid.removeAttribute("hidden")
        email.setAttribute("id", "invalidInput")
    }
});
const dissmissButton = document.getElementById("dissmissButton")
const subscribeForm = document.querySelector(".container__mail")
dissmissButton.addEventListener("click", () => {
    subscribeForm.reset()
    container.style.display = "flex"
    secundaryContainer.style.display = "none"
    email.setAttribute("id", "input")
    invalid.setAttribute("hidden", " ")
})
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}