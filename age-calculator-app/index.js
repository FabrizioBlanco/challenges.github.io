/*

    I have to be honest with me: 
    Logic to contemplated months with different total days and leap years
    is thanks to chatGPT. Just make some modifications.
    I tried do it by myself but i can't affort that challenge. My problem was
    trying to calculted days. Month and years were easy with library date-fns

*/
import { differenceInDays } from 'https://cdn.skypack.dev/date-fns'
document.addEventListener("DOMContentLoaded", () => {
    const imgButton = document.getElementById("container__img");
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const resultDay = document.getElementById("days");
    const resultMonth = document.getElementById("months");
    const resultYear = document.getElementById("years");
    const dateContainer = document.querySelectorAll(".date__item")

    imgButton.addEventListener("click", startDate);

    function convertDaysToYearsMonthsDays(totalDays) {
        const currentDate = new Date();

        let years = 0;
        let months = 0;
        let days = 0;

        const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

        while (totalDays > 0) {
            const currentYear = currentDate.getFullYear() + years;
            const daysInYear = isLeapYear(currentYear) ? 366 : 365;

            if (totalDays >= daysInYear) {
                totalDays -= daysInYear;
                years++;
            } else {
                const daysInMonth = new Date(currentYear, months + 1, 0).getDate();
                if (totalDays >= daysInMonth) {
                    totalDays -= daysInMonth;
                    months++;
                } else {
                    days = totalDays;
                    totalDays = 0;
                }
            }
        }

        return { years, months, days };
    }

    function validatedDate(day, month, year) {
        const error = document.querySelectorAll(".error")

        const dateToValidate = new Date(year, month - 1, day);
        if (dateToValidate.getDate() !== day) {
            dateContainer.forEach(element => {
                element.style.borderColor="Lightred"
            });
            error.forEach(element =>{
                element.removeAttribute("hidden")
            })
            throw new Error("día inválido")
        } else if (dateToValidate.getMonth() !== month - 1) {
            dateContainer.forEach(element => {
                element.style.borderColor="Lightred"
            });
            error.forEach(element =>{
                element.removeAttribute("hidden")
            })
            throw new Error("Mes inválido")
        } else if (dateToValidate.getFullYear() > year) {
            dateContainer.forEach(element => {
                element.style.borderColor="Lightred"
            });
            error.forEach(element =>{
                element.removeAttribute("hidden")
            })
            throw new Error("Año inválido")
        } else{
            return true
        }
    }

    function startDate() {
        const currentDate = new Date();
        const currentDateInSameTimeZone = new Date(
            currentDate.getUTCFullYear(),
            currentDate.getUTCMonth(),
            currentDate.getUTCDate()
        );

        const day = parseInt(dayInput.value, 10);
        const month = parseInt(monthInput.value, 10);
        const year = parseInt(yearInput.value, 10);

        try {
            if (validatedDate(day, month, year)) {
                const dateToCompare = new Date(Date.UTC(year, month - 1, day));

                const totalD = differenceInDays(currentDateInSameTimeZone, dateToCompare);

                const totalDays = totalD;
                const { years, months, days } = convertDaysToYearsMonthsDays(totalDays);

                resultDay.innerText = days.toString();
                resultMonth.innerText = months.toString();
                resultYear.innerText = years.toString();
            }

        } catch (error) {
            console.error(error.message);
            return
        }

    }
});
