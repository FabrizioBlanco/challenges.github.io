import { useState } from "react"
import "./StepOne.css"

export default function StepOne({ handleInput }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const handdleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className="stepOneContainer">
            <h1>Personal info</h1>
            <p>Please, provide your name, email adress, and phone numer.</p>
            <form onSubmit={handdleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="e.g. Harry Potter"
                    value={name}
                    onChange={
                        (event) => {
                            setName(event.target.value);
                            handleInput(event)
                        }}
                />
                <label>Email Adress</label>
                <input
                    type="email"
                    name="email"
                    placeholder="e.g harrypotter@gmail.com"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        handleInput(event)
                    }
                    } />
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="e.g. +1 234 567 890"
                    value={phone}
                    onChange={(event) => {
                        setPhone(event.target.value);
                        handleInput(event)
                    }
                    } />
            </form>
        </div>
    )
}