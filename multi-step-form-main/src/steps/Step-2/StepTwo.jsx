import "./StepTwo.css";
import { useEffect, useState } from "react";

const arcadeValue = 9;
const arcadeYearlyValue = 90;
const advancedValue = 12;
const advancedYearlyValue = 120;
const proValue = 15;
const proYearlyValue = 150;

export default function StepTwo({ handleInput, setActualPage }) {
    const [subscription, setSubscription] = useState("arcade");
    const [period, setPeriod] = useState(0);

    useEffect(() => {
        setActualPage(2);
    }, [setActualPage]);

    const handlePeriodChange = (value) => {
        setPeriod(parseInt(value));
    };

    const handlePriceChange = () => {
        if (subscription === "arcade") {
            handleInput({target: {
                name: "subName",
                value: subscription
            }})
            return period === 0 ? arcadeValue : arcadeYearlyValue
        }
        if (subscription === "advanced") {
            handleInput({target: {
                name: "subName",
                value: subscription
            }})
            return period === 0 ? advancedValue : advancedYearlyValue
        }
        handleInput({target: {
            name: "subName",
            value: subscription
        }})
        if (subscription === "pro") {
            return period === 0 ? proValue : proYearlyValue
        }
    }

    useEffect(() => {
        const price = handlePriceChange();
        handleInput({ target: { name: "price", value: price } });
    }, [subscription , period]);


    return (
        <div className="SelectionContainer">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <form>
                <div className="option" onClick={() => setSubscription("arcade")}>
                    <img className="optionImg" src="src/assets/images/icon-arcade.svg" alt="arcade" />
                    <div className="option_text">
                        <span>Arcade</span>
                        <p>{`${period === 0 ? `$${arcadeValue}/mo` : `$${arcadeYearlyValue}/yr`}`}</p>
                        <p id="freeMonths">{`${period === 1 ? `2 months free` : ``}`}</p>   
                    </div>
                </div>

                <div className="option" onClick={() => setSubscription("advanced")}>
                    <img className="optionImg" src="src/assets/images/icon-advanced.svg" alt="advanced" />
                    <div className="option_text">
                        <span>Advanced</span>
                        <p>{`${period === 0 ? `$${advancedValue}/mo` : `$${advancedYearlyValue}/yr`}`}</p>
                        <p id="freeMonths">{`${period === 1 ? `2 months free` : ``}`}</p>
                    </div>
                </div>

                <div className="option" onClick={() => setSubscription("pro")}>
                    <img className="optionImg" src="src/assets/images/icon-pro.svg" alt="pro" />
                    <div className="option_text">
                        <span>Pro</span>
                        <p>{`${period === 0 ? `$${proValue}/mo` : `$${proYearlyValue}/yr`}`}</p>
                        <p id="freeMonths">{`${period === 1 ? `2 months free` : ``}`}</p>
                    </div>
                </div>

                <div className="suscription">
                    <label>Monthly </label>
                    <input
                        id="option_range"
                        type="range"
                        min={0}
                        max={1}
                        value={period}
                        onChange={(event) => {
                            let changeValue = parseInt(event.target.value)
                            handlePeriodChange(changeValue);
                            handleInput({ target: { name: "sub", value: changeValue } });
                        }}
                    />
                    <label id="yearly"> Yearly</label>
                </div>
            </form>
        </div>
    );
}