import "../Step-4/StepFour.css"

export default function StepFour({ formData, restoreBackUp }) {
    console.log('Paso final: ', formData)
    return (
        <div className="SelectionContainer">
            <h1>Finishing up</h1>
            <p>Double-check everyting looks OK Before confirming</p>
            <div className="resume">
                <div className="addOn">
                    <span>{`${formData.subName}`}</span>

                    <a href="/step-1" onClick={restoreBackUp}>Change</a>
                </div>
            </div>
        </div>
    )
}