import "./StepTwo.css";
import { useEffect, useState } from "react";

const arcadeValue = 9;
const arcadeYearlyValue = 90;
const advancedValue = 12;
const advancedYearlyValue = 120;
const proValue = 15;
const proYearlyValue = 150;

export default function StepTwo({ handleInput, setActualPage }) {
    const [subscription, setSubscription] = useState("Arcade")
    const [period, setPeriod] = useState(0)

    useEffect(() => {
        setActualPage(2)
    }, [setActualPage])

    const handlePeriodChange = (value) => {
        setPeriod(parseInt(value))
    }

    const calculatePrice = () => {
        let price = 0;
        if (subscription === "Arcade") {
            price = period === 0 ? arcadeValue : arcadeYearlyValue
        } else if (subscription === "Advanced") {
            price = period === 0 ? advancedValue : advancedYearlyValue
        } else if (subscription === "Pro") {
            price = period === 0 ? proValue : proYearlyValue
        }
        return price
    }

    useEffect(() => {
        const price = calculatePrice()
        handleInput({ target: { name: "price", value: price } })
        handleInput({ target: { name: "subName", value: subscription } })
        handleInput({ target: { name: "sub", value: period } })
    }, [subscription, period])

    return (
        <div className="SelectionContainer">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <form>
                <div className="option" onClick={() => setSubscription("Arcade")}>
                    <img className="optionImg" src="src/assets/images/icon-arcade.svg" alt="arcade" />
                    <div className="option_text">
                        <span>Arcade</span>
                        <p>{`${period === 0 ? `$${arcadeValue}/mo` : `$${arcadeYearlyValue}/yr`}`}</p>
                        <p id="freeMonths">{`${period === 1 ? `2 months free` : ``}`}</p>
                    </div>
                </div>

                <div className="option" onClick={() => setSubscription("Advanced")}>
                    <img className="optionImg" src="src/assets/images/icon-advanced.svg" alt="advanced" />
                    <div className="option_text">
                        <span>Advanced</span>
                        <p>{`${period === 0 ? `$${advancedValue}/mo` : `$${advancedYearlyValue}/yr`}`}</p>
                        <p id="freeMonths">{`${period === 1 ? `2 months free` : ``}`}</p>
                    </div>
                </div>

                <div className="option" onClick={() => setSubscription("Pro")}>
                    <img className="optionImg" src="src/assets/images/icon-pro.svg" alt="pro" />
                    <div className="option_text">
                        <span>Pro</span>
                        <p>{`${period === 0 ? `$${proValue}/mo` : `$${proYearlyValue}/yr`}`}</p>
                        <p id="freeMonths">{`${period === 1 ? `2 months free` : ``}`}</p>
                    </div>
                </div>

                <div className="suscription">
                    <label>Monthly</label>
                    <input
                        id="option_range"
                        type="range"
                        min={0}
                        max={1}
                        value={period}
                        onChange={(event) => {
                            handlePeriodChange(parseInt(event.target.value))
                        }}
                    />
                    <label id="yearly">Yearly</label>
                </div>
            </form>
        </div>
    )
}

