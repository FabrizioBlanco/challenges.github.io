document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => {
            if (!response) {
                throw new Error("Error to load")
            } else {
                return response.json()
            }
        }).then(data => {
            let maxAmountIndex = 0
            let maxAmount = 0
            data.forEach((element, index) => {
                if (element.amount > maxAmount) {
                    maxAmount = element.amount
                    maxAmountIndex = index
                }
            });
            const bar = document.querySelectorAll(".bar")
            bar.forEach((bar, index) => {
                //normalize height to the higher bar
                const height = ((data[index].amount / maxAmount) * 100) * 1.4
                bar.style.height = `${height}px`
            });
            bar[maxAmountIndex].classList.add("higher")
        })
})