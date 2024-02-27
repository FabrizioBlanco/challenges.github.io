const button = document.getElementById("button")
const container = document.querySelector(".container")
const secundaryContainer = document.querySelector(".secundaryContainer")
const item = document.querySelectorAll(".rating__item")
const choosen = document.querySelector("#selected")

let selectedValue
let isChoose = false
function reset() {
    item.forEach(element => {
        element.style.backgroundColor = ""
        element.style.color = ""
    })
}
function selected() {
    item.forEach(element => {
        element.addEventListener("click", () => {
            if (isChoose && selectedValue === element.innerText) {
                reset()
                isChoose = false
                selectedValue = null
            } else {
                reset()
                element.style.backgroundColor = "hsl(25, 97%, 53%)"
                element.style.color = "white"
                isChoose = true
                selectedValue = element.innerText
            }
        })
    })
}
selected()
button.addEventListener("click", () => {
    if (isChoose) {
        container.style.display = "none"
        secundaryContainer.style.display = "flex"
        choosen.innerText = selectedValue
    } else {
        console.log("Elige una opción antes de hacer clic en el botón")
    }
})





