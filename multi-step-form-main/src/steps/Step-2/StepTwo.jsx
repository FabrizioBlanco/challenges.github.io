import "./StepTwo.css";
import { useEffect, useState } from "react";

const arcadeValue = 34;
const arcadeYearlyValue = 54;
const advancedValue = 56;
const advancedYearlyValue = 106;
const proValue = 145;
const proYearlyValue = 245;

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
            return period === 0 ? arcadeValue : arcadeYearlyValue
        }
        if (subscription === "advanced") {
            return period === 0 ? advancedValue : advancedYearlyValue
        }
        if (subscription === "pro") {
            return period === 0 ? proValue : proYearlyValue
        }
    }

    useEffect(() => {
        const price = handlePriceChange();
        handleInput({ target: { name: "price", value: price } });
    }, [subscription, period]);

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
                    </div>
                </div>

                <div className="option" onClick={() => setSubscription("advanced")}>
                    <img className="optionImg" src="src/assets/images/icon-advanced.svg" alt="advanced" />
                    <div className="option_text">
                        <span>Advanced</span>
                        <p>{`${period === 0 ? `$${advancedValue}/mo` : `$${advancedYearlyValue}/yr`}`}</p>
                    </div>
                </div>

                <div className="option" onClick={() => setSubscription("pro")}>
                    <img className="optionImg" src="src/assets/images/icon-pro.svg" alt="pro" />
                    <div className="option_text">
                        <span>Pro</span>
                        <p>{`${period === 0 ? `$${proValue}/mo` : `$${proYearlyValue}/yr`}`}</p>
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
                            handlePeriodChange(event.target.value);
                        }}
                    />
                    <label id="yearly"> Yearly</label>
                </div>
            </form>
        </div>
    );
}