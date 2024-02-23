// const categorities = document.querySelectorAll(".category")
// categorities.forEach(element => {
//     console.log(element)
//     console.log("Texto dentro: "+ element.innerText)
// });

const categorities = document.getElementsByClassName("category")
const result = document.getElementsByClassName("result")
const icon = document.getElementsByClassName("icon")
fetch("data.json")
    .then(response => {
        if (!response) {
            throw new Error("Error al cargar")
        } else {
            return response.json()
        }
    }
    ).then(data => {

        for (let i = 0; i < categorities.length; i++) {
            categorities[i].innerText = data[i].category
            result[i].innerText = data[i].score
            icon[i].setAttribute("src", data[i].icon)
        }
    }).catch(error => {
        console.log(error)
    })

