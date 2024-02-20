const plusList = document.querySelectorAll(".question__plus")
let active=false
for (const plus of plusList) {
    plus.addEventListener("click",()=>{
        const answer = plus.nextElementSibling
        if(!active){
            answer.style.display= "flex"
            active = true
            plus.removeAttribute("src")
            plus.setAttribute("src","assets/images/icon-minus.svg")
            
        }else{
            answer.style.display="none"
            active = false
            plus.removeAttribute("src")
            plus.setAttribute("src","assets/images/icon-plus.svg")

        }
    })
}