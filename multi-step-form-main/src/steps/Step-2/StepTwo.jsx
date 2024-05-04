import "./StepTwo.css"
import { useEffect, useState } from "react";
export default function StepTwo({ handleInput, setActualPage }) {
    let arcadeValue = 34
    let advancedValue = 56
    let proValue = 145
    const [subscription, setSubscription] = useState("arcade");
    const [period, setPeriod] = useState(0);
    const handleSubscriptionClick = (value) => {
        setSubscription(value);
        handleInput({ target: { name: "sub", value } }); // Llama a handleInput con la nueva suscripción
    };

    const handlePeriodChange = (value) => {
        setPeriod(value);
        handleInput({ target: { name: "period", value } }); // Llama a handleInput con el nuevo período
    };
    useEffect(() => {
        setActualPage(2)
    }, [setActualPage])
    return (
        <div className="SelectionContainer">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <form>
                <div className="option"
                    onClick={() => handleSubscriptionClick("arcade")}
                >
                    <img className="optionImg" src="src/assets/images/icon-arcade.svg" alt="arcade" />
                    <div className="option_text">
                        <span>Arcade</span>
                        {<p>${arcadeValue}/mo</p>}
                    </div>
                </div>
                <div className="option"
                    onClick={() => handleSubscriptionClick("Advanced")}
                >
                    <img className="optionImg" src="src/assets/images/icon-advanced.svg" alt="arcade" />
                    <div className="option_text">
                        <span>Advanced</span>
                        {<p>${advancedValue}/mo</p>}
                    </div>
                </div>
                <div className="option"
                    onClick={() => handleSubscriptionClick("Pro")}
                >
                    <img className="optionImg" src="src/assets/images/icon-pro.svg" alt="arcade" />
                    <div className="option_text">
                        <span>Pro</span>
                        {<p>${proValue}/mo</p>}
                    </div>
                </div>
                <div className="suscription">
                    <label>Monthly </label>
                    <input
                        id="option_range"
                        type="range"
                        min="0"
                        max="1"
                        step="1"
                        onChange={(event) => handlePeriodChange(event.target.value)}
                    />
                    <label id="yearly"> Yearly</label>
                </div>
            </form >
        </div >
    )
}