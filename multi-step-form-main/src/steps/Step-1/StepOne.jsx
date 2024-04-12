import "./StepOne.css"
export default function StepOne() {
    return (
        <div className="stepOneContainer">
            <h1>Personal info</h1>
            <p>Please, provide your name, email adress, and phone numer</p>
            <form action="">
                <label>Name</label>
                <input type="text" name="" placeholder="e.g. Harry Potter" />
                <label>Email Adress</label>
                <input type="email" name="" placeholder="e.g harrypotter@gmail.com"/>
                <label>Phone Number</label>
                <input type="number" name="" placeholder="e.g. +1 234 567 890" />
            </form>
        </div>        
    )
}