import "./StepThree.css"
export default function StepThree() {
    return (
        <div className="SelectionContainer">
            <h1>Pick Add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>
            <form>
                <div className="option">
                    <input type="checkbox" className="check_option" />
                    <div className="option_text">
                        <span>Online service</span>
                        <p>Access to multiplayer games</p>
                    </div>
                    <span className="price">+$1/mo</span>
                </div>
                <div className="option">
                    <input type="checkbox" className="check_option" />
                    <div className="option_text">
                        <span>Larger Storage</span>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    {

                    }
                    <span className="price">+$1/mo</span>
                </div>
                <div className="option">
                    <input type="checkbox" className="check_option" />
                    <div className="option_text">
                        <span>Customizable profile</span>
                        <p>custom theme on your profile</p>
                    </div>
                    <span className="price">+$1/mo</span>
                </div>
            </form>
        </div>
    )
}