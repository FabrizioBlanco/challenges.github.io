export default function StepFour({ formData }) {
    return (
        <div className = "SelectionContainer">
            <h1>Finishing up</h1>
            <p>Double-check everyting looks OK Before confirming</p>
            <div className="resume">
                <span>{`${formData.subName}`}</span>
                <a href="/step-2">Change</a>
                
            </div>
        </div>
    )
}