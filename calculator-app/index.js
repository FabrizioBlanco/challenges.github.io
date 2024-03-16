document.addEventListener("DOMContentLoaded", () => {
    /**
         *  I define an objet to associated  every range value
         *  and it consequence value
    */

    const themeAction = {
        "1": () => {
            const background1 = document.body
            background1.style.backgroundColor = ""
            const calc1 = document.getElementById("calc")
            calc1.style.color = ""
            const keyboard1 = document.getElementById("keyPadContainer")
            keyboard1.style.backgroundColor = ""
            const selectorNumer1 = document.getElementById("selectorNumber")
            selectorNumer1.style.color = ""
            const display1 = document.getElementById("displayContainer")
            display1.style.backgroundColor = ""
            display1.style.color = ""
            const key1 = document.querySelectorAll(".key")
            key1.forEach(keyElement => {
                keyElement.style.backgroundColor = ""
                keyElement.style.borderBottomColor = ""
                keyElement.style.color = ""
            })
            const textKey1 = document.querySelectorAll(".textKey")
            const theme1 = document.getElementById("selector")
            theme1.style.color = ""
            textKey1.forEach(element => {
                element.style.backgroundColor = ""
                element.style.borderBottomColor = ""
            });
            const equalBotton1 = document.querySelector(".equal")
            equalBotton1.style.backgroundColor = ""
            equalBotton1.style.borderBottomColor = ""
        },
        "2": () => {
            const background2 = document.body
            background2.style.backgroundColor = "hsl(0, 0%, 90%)"
            /* Selector and calc*/
            const calc2 = document.getElementById("calc")
            calc2.style.color = "hsl(60, 10%, 19%)"
            const selectorNumer2 = document.getElementById("selectorNumber")
            selectorNumer2.style.color = "hsl(60, 10%, 19%)"
            const theme2 = document.getElementById("selector")
            theme2.style.color = "hsl(60, 10%, 19%)"
            /* Display */
            const display2 = document.getElementById("displayContainer")
            display2.style.backgroundColor = "hsl(0, 0%, 93%)"
            display2.style.color = "hsl(60, 10%, 19%)"
            /* Numpad */
            const keyboard2 = document.getElementById("keyPadContainer")
            keyboard2.style.backgroundColor = "hsl(0, 5%, 81%)"
            const key2 = document.querySelectorAll(".key")
            key2.forEach(keyElement => {
                keyElement.style.backgroundColor = ""
                keyElement.style.borderBottomColor = "hsl(35, 11%, 61%)"
                keyElement.style.color = ""
            })
            const textKey2 = document.querySelectorAll(".textKey")
            textKey2.forEach(element => {
                element.style.backgroundColor = "hsl(185, 42%, 37%)"
                element.style.borderBottomColor = "hsl(185, 58%, 25%)"
            });
            const equalBotton2 = document.querySelector(".equal")
            equalBotton2.style.backgroundColor = "hsl(25, 98%, 40%)"
            equalBotton2.style.borderBottomColor = "hsl(25, 99%, 27%)"
        },
        "3": () => {
            const background3 = document.body
            background3.style.backgroundColor = "hsl(268, 75%, 9%)"//
            /* Selector and calc*/
            const calc3 = document.getElementById("calc")
            calc3.style.color = "hsl(52, 100%, 62%)"//
            const selectorNumer3 = document.getElementById("selectorNumber")
            selectorNumer3.style.color = "hsl(52, 100%, 62%)"//
            const them3 = document.getElementById("selector")
            them3.style.color = "hsl(52, 100%, 62%)"//
            /* Display */
            const display3 = document.getElementById("displayContainer")
            display3.style.backgroundColor = "hsl(268, 71%, 12%)"//
            display3.style.color = "hsl(52, 100%, 62%)"//
            /* Numpad */
            const keyboard3 = document.getElementById("keyPadContainer")
            keyboard3.style.backgroundColor = "hsl(268, 71%, 12%)"//
            const textKey3 = document.querySelectorAll(".textKey")
            const key3 = document.querySelectorAll(".key")
            key3.forEach(keyElement => {
                keyElement.style.backgroundColor = "hsl(268, 47%, 21%)"//
                keyElement.style.borderBottomColor = "hsl(290, 70%, 36%)"//
                keyElement.style.color = "hsl(52, 100%, 62%)"//
            })
            textKey3.forEach(element => {
                element.style.color = ""
                element.style.backgroundColor = "hsl(281, 89%, 26%)"//
                element.style.borderBottomColor = "hsl(285, 91%, 52%)"
            });
            const equalBotton3 = document.querySelector(".equal")
            equalBotton3.style.color = "hsl(0,0%,0%)"
            equalBotton3.style.backgroundColor = "hsl(176, 100%, 44%)"
            equalBotton3.style.borderBottomColor = "hsl(177, 92%, 70%)"
        }
    }
    let inputEvents = []
    const actions = ["DEL", "RESET", "="]
    const operators = ["+", "-", "/", "x", "."]
    let currentNumber = ''
    let storageNumber = ''
    let currentOperator = ''
    let result = ''

    /**
     * This is an add i want to add on. Isn't part of challenge
     */
    const holdDel = document.getElementById("del")
    let delTimeout = 0
    function holdEventButton() {
        delTimeout = setTimeout(() => {
            currentNumber = ''
            storageNumber = ''
            currentOperator = ''
            inputEvents = []
        }, 800);
    }
    holdDel.addEventListener("mousedown", holdEventButton)
    holdDel.addEventListener("mouseup", () => {
        clearTimeout(delTimeout)
        currentNumber = ''
        storageNumber = ''
        currentOperator = ''
        inputEvents = []
    });
    holdDel.addEventListener("mouseleave", () => {
        clearTimeout(delTimeout)
    });
    function calculator(event) {

        for (let i = 0; i < event.length; i++) {
            const element = event[i];
            document.getElementById('display').innerText = currentNumber
            if (operators.includes(element)) {
                if (currentNumber !== '') {
                    storageNumber = parseFloat(currentNumber)
                    currentNumber = ''
                    document.getElementById('display').innerText = storageNumber + element + currentNumber
                }
                currentOperator = element;
            } else if (actions.includes(element)) {
                actmagmt(element);
            } else {
                currentNumber += element;
                document.getElementById('display').innerText = storageNumber + currentOperator + currentNumber
            }
        }
    }
    /**
     *  management to especial buttons (DEL, RESET,=)
    */
    function actmagmt(action) {
        switch (action) {
            case 'DEL':
                currentNumber = currentNumber.slice(0, -1);
                break;
            case 'RESET':
                currentNumber = ''
                storageNumber = ''
                currentOperator = ''
                inputEvents = []
                result = 0
                break
            case '=':
                // Realiza la operación solo si hay un operador y un número actual
                if (currentOperator && currentNumber !== '') {
                    operation();
                }
                break;
        }
    }
    /** 
     *  make operations
    */
    function operation() {
        let num1 = parseFloat(storageNumber);
        let num2 = parseFloat(currentNumber);
        switch (currentOperator) {
            case '+':
                result = num1 + num2
                break;
            case '-':
                result = num1 - num2
                break;
            case '/':
                result = num1 / num2
                break;
            case 'x':
                result = num1 * num2
                break;
        }
        currentNumber = result.toString()
        storageNumber = ''
        currentOperator = ''
        document.getElementById('display').innerText = result
    }
    function updateSliderStyles(value) {
        const input = document.getElementById("selectorInput")
        switch (value) {
            case '1':
                if (input.className = "themeSelector2") {
                    input.classList.replace("themeSelector2", "themeSelector")
                }
                if (input.className = "themeSelector3") {
                    input.classList.replace("themeSelector3", "themeSelector")
                }
                break;
            case '2':
                if (input.className = "themeSelector3") {
                    input.classList.replace("themeSelector3", "themeSelector2")
                }
                input.classList.replace("themeSelector", "themeSelector2")
                break;
            case '3':
                if (input.className = "themeSelector") {
                    input.classList.replace("themeSelector", "themeSelector3")
                }
                if (input.className = "themeSelector2") {
                    input.classList.replace("themeSelector2", "themeSelector3")
                }

                break;
            default:
                break;
        }
    }
    const customRange = document.getElementById('selectorInput');
    customRange.addEventListener("input", () => {
        let actualState = customRange.value
        if (themeAction[actualState]) {
            themeAction[actualState]()
            updateSliderStyles(actualState)
        }
    })

    const inputElement = document.querySelectorAll(".inputButton")
    inputElement.forEach(button => {
        button.addEventListener('click', (event) => {
            const value = event.target.value
            currentNumber = ''
            inputEvents.push(value);
            calculator(inputEvents);
        })
    })

})