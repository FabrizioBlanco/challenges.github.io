import "./StepThree.css"
import { useEffect } from "react"

const price1M = 1
const price1Y = 10
const price2M = 2
const price2Y = 20
const price3M = 2
const price3Y = 20

export default function StepThree({ formData, setFormData, handleStepThreeChange }) {

    useEffect(() => {
        handleStepThreeChange(price1M, price2M, price3M);
    }, [formData]);
    const handleCheckOption = (checked, price, addOn) => {
        let updatedAddOn = [...formData.addOn];
        let updatedPrice = formData.price;
        const index = updatedAddOn.indexOf(addOn);
        if (checked && index === -1) {
            updatedAddOn.push(addOn);
            updatedPrice += price;
        } else if (!checked && index !== -1) {
            updatedAddOn.splice(index, 1);
            updatedPrice -= price;
        }
        setFormData(prevState => ({
            ...prevState,
            price: updatedPrice,
            addOn: updatedAddOn
        }));
    }
    return (
        <div className="SelectionContainer">
            <h1>Pick Add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>
            <form>
                <div className="option">
                    <input
                        type="checkbox"
                        className="check_option"
                        onChange={(data) => {
                            handleCheckOption(data.target.checked, formData.sub === 0 ? price1M : price1Y, "Online service")
                        }}
                    />
                    <div className="option_text">
                        <span>Online service</span>
                        <p>Access to multiplayer games</p>
                    </div>
                    <span className="price">{`${formData.sub === 0 ? `+$${price1M}/mo` : `+$${price1Y}/yr`}`}</span>
                </div>
                <div className="option">
                    <input type="checkbox" className="check_option"
                        onChange={(data) => {
                            handleCheckOption(data.target.checked, formData.sub === 0 ? price2M : price2Y, "Larger Storage")
                        }} />
                    <div className="option_text">
                        <span>Larger Storage</span>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <span className="price">{`${formData.sub === 0 ? `+$${price2M}/mo` : `+$${price2Y}/yr`}`}</span>
                </div>
                <div className="option">
                    <input type="checkbox" className="check_option"
                        onChange={(data) => {
                            handleCheckOption(data.target.checked, formData.sub === 0 ? price3M : price3Y, "Customizable profile")
                        }} />
                    <div className="option_text">
                        <span>Customizable profile</span>
                        <p>custom theme on your profile</p>
                    </div>
                    <span className="price">{`${formData.sub === 0 ? `+$${price3M}/mo` : `+$${price3Y}/yr`}`}</span>
                </div>
            </form>
        </div>
    )
}
// const extraPrice = checked ? formData.price + price : formData.price - price
// if (checked) {
//     setFormData((prevState) => ({
//         ...prevState,
//         price: extraPrice,
//         addOn: [...new Set([...(Array.isArray(prevState.addOn) ? prevState.addOn : []), addOn])]
//     }))
// } else {
//     setFormData((prevState) => ({
//         ...prevState,
//         price: extraPrice,
//         addOn: (Array.isArray(prevState.addOn) ? prevState.addOn : []).filter(item => item !== addOn)
//     }))
// }