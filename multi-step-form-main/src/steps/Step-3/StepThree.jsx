import { useState } from "react"
import "./StepThree.css"

const price1M = 1
const price1Y = 10
const price2M = 2
const price2Y = 20
const price3M = 2
const price3Y = 20

export default function StepThree({ handleInput, formData }) {
    const handleCheckOption = (checked, price) => {
        const extraPrice = checked ? formData.price + price : formData.price - price
        handleInput({
            target: {
                name: "price",
                value: extraPrice
            }
        })
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
                            handleCheckOption(data.target.checked, formData.sub === 0 ? price1M : price1Y)
                            console.log("Check 1")
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
                            handleCheckOption(data.target.checked, formData.sub === 0 ? price2M : price2Y)
                            console.log("Check 2")
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
                            handleCheckOption(data.target.checked, formData.sub === 0 ? price3M : price3Y)
                            console.log("Check 3")
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