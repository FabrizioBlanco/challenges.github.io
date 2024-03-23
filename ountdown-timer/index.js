import confetti from 'https://cdn.skypack.dev/canvas-confetti';
document.addEventListener("DOMContentLoaded", async () => {
    const days = document.getElementById("day")
    const hour = document.getElementById("hour")
    const min = document.getElementById("min")
    const sec = document.getElementById("sec")
    /*
    awaiting to values of data.json to could start countdown
    (I know this is unnecessary, is just to practice)
    */
    try {
        const response = await fetch("data.json")
        const data = await response.json()
        countDown(data)
    } catch (error) {
        console.error("this is the issue: ", error)
    }
    
    function countDown(data) {
        let daysLeft = data.days
        let hourLeft = data.hour
        let minLeft = data.min
        let secLeft = data.sec
        const timer = setInterval(() => {
            days.innerText = daysLeft
            hour.innerText = hourLeft
            min.innerText = minLeft
            sec.innerText = secLeft
            if (secLeft > 0) {
                secLeft--
            } else {
                secLeft = 59
                if (minLeft > 0) {
                    minLeft--
                } else {
                    minLeft = 59
                    if (hourLeft > 0) {
                        hourLeft--
                    } else {
                        hourLeft = 23
                        if (daysLeft > 0) {
                            daysLeft--
                        } else {
                            clearInterval(timer);
                            confetti()
                            return
                        }
                    }
                }
            }

            console.log(`${daysLeft} days ${hourLeft} hours ${minLeft} minutes ${secLeft} seconds`)
        }, 1000)
    }
})