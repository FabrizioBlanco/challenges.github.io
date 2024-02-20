const plusList = document.querySelectorAll(".question__plus")
plusList.forEach(plus => {
    let active = false
    plus.addEventListener("click", () => {
        console.log("hola")
        const answer = plus.nextElementSibling
        try {
            if (!active) {
                answer.style.display = "flex"
                active = true
                plus.removeAttribute("src")
                plus.setAttribute("src", "assets/images/icon-minus.svg")
            } else {
                answer.style.display = "none"
                active = false
                plus.removeAttribute("src")
                plus.setAttribute("src", "assets/images/icon-plus.svg")
            }
        } catch (error) {
            console.log(error)
        }
    })
})

