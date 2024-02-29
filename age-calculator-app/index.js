/*

    I have to be honest with me: 
    Logic to contemplated months with different total days and leap years
    is thanks to chatGPT. Just make some modifications.
    I tried do it by myself but i can't affort that challenge. My problem was
    trying to calculted days. Month and years were easy with library date-fns

*/


import {differenceInDays} from 'https://cdn.skypack.dev/date-fns'
document.addEventListener("DOMContentLoaded", () => {
    const imgButton = document.getElementById("container__img")
    const day = document.getElementById("day")
    const month = document.getElementById("month")
    const year = document.getElementById("year")
    const resultDay = document.getElementById("days")
    const resultMonth = document.getElementById("months")
    const resultYear = document.getElementById("years")



    imgButton.addEventListener("click", startDate) 
    function convertDaysToYearsMonthsDays(totalDays) {
        const currentDate = new Date();

        let years = 0;
        let months = 0;
        let days = 0;

        // Verify if is a leap year
        const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

        while (totalDays > 0) {
            const currentYear = currentDate.getFullYear() + years;
            const daysInYear = isLeapYear(currentYear) ? 366 : 365;

            // Completed days
            if (totalDays >= daysInYear) {
                totalDays -= daysInYear;
                years++;
            } else {
                // completed months
                const daysInMonth = [31, isLeapYear(currentYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                for (let i = 0; i < 12; i++) {
                    if (totalDays >= daysInMonth[i]) {
                        totalDays -= daysInMonth[i];
                        months++;
                    } else {
                        break;
                    }
                }
                // days remaining
                days = totalDays;
                totalDays = 0;
            }
        }

        return { years, months, days };
    }
    function startDate() {
        let realDay = parseInt(day.value) + 1 //sum 1 to index days because js manege days from 0 to 30 
        const actualDate = new Date(`${year.value}-${month.value}-${realDay}`)//actual date. 
        const totalD = differenceInDays(new Date(), actualDate)//calculate diferents between actual date and input date
        const totalDays = totalD;
        
        const { years, months, days } = convertDaysToYearsMonthsDays(totalDays);//converts day to year, months and days remining 
        resultDay.innerText = days // round out hours like one more day. Don't contemplated actual time
        resultMonth.innerText = months
        resultYear.innerText = years
    }
})
