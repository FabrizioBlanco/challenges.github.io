import { Link } from "react-router-dom"
import "../Step-4/StepFour.css"
const price1M = 1
const price1Y = 10
const price2M = 2
const price2Y = 20
const price3M = 2
const price3Y = 20
export default function StepFour({ formData, newSetActualPage }) {
    const getTotalPrice = () => {
        return <>
            <p>Total (per {formData.sub === 0 ? 'month' : 'year'})</p>
            <span>${formData.price}/{formData.sub === 0 ? 'mo' : 'yr'}</span>
        </>
    }
    const getAddOnPrice = (extra) => {
        let result = <></>
        let price = 0
        if (extra === "Online service") {
            price = formData.addOn.includes(extra) ? (formData.sub === 0 ? price1M : price1Y) : 0
        } else if (extra === "Larger Storage") {
            price = formData.addOn.includes(extra) ? (formData.sub === 0 ? price2M : price2Y) : 0
        } else if (extra === "Customizable profile") {
            price = formData.addOn.includes(extra) ? (formData.sub === 0 ? price3M : price3Y) : 0
        }
        result = <>
            {extra}
            <div className="AddOnPrice">
                <p>+${price}</p>
            </div>
        </>
        return result
    }
    return <>
        <div className="SelectionContainer">
            <h1>Finishing up</h1>
            <p>Double-check everyting looks OK Before confirming</p>
            <div className="resumeContainer">
                <div className="subName">
                    {formData.sub === 0 ? <>
                        <span>{`${formData.subName}(monthly)`}</span>
                    </>
                        :
                        <span>{`${formData.subName}(yearly)`}</span>
                    }
                    <div id="changeData">
                        <Link to="/step-1" onClick={() => {
                            newSetActualPage(1)
                        }}>Change</Link>
                    </div>
                </div>
                {formData.addOn != undefined || null ?
                    formData.addOn.map((extra) => (
                        <div className="resumeBox">
                            {getAddOnPrice(extra)}
                        </div>
                    )) : null}
            </div>
            {getTotalPrice()}
        </div >
    </>
}