import './App.css'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import React, { useState } from 'react';
import StepOne from './steps/Step-1/StepOne'
import StepTwo from './steps/Step-2/StepTwo'
import StepThree from './steps/Step-3/StepThree'
import StepFour from './steps/Step-4/StepFour'

export default function App() {


  const [actualPage, setActualPage] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sub: '',
    period: ''
  })
  /**
   * Disable button "Go Back" if step is 1
   */

  const Button = () => {
    console.log(formData)
    let url = window.location.pathname
    console.log("Estamos en:", url)
    if (actualPage !== 1) {
      return <Link className="button" id='backButton'
        onClick={
          () => {
            setActualPage(actualPage - 1)
          }}
        to={`/step-${actualPage - 1}`}
      >Go Back</Link>
    } else {
      //Any element just to fill DOM space. Do not pay attention  to this
      return <><p></p></>
    }
  }
  /**
   * just make a render when button is press
   */
  const haddleInput = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  /**
   * Handle data from StepOne component
   */
  const handleSaveData = (data) => {
    setFormData(data)
  }

  /**
   * Define routes from React Router V6.
   */
  return (
    <>
      <header>
        <span className={`step ${actualPage === 1 ? "selectStep" : ""}`}>1</span>
        <span className={`step ${actualPage === 2 ? "selectStep" : ""}`}>2</span>
        <span className={`step ${actualPage === 3 ? "selectStep" : ""}`}>3</span>
        <span className={`step ${actualPage === 4 ? "selectStep" : ""}`}>4</span>
      </header>
      <section id='mainContainer'>
        <Routes>
          <Route path="/step-1" element={<StepOne handleInput={haddleInput} setActualPage={() => { setActualPage(1) }} />} />
          <Route path="/step-2" element={<StepTwo handleInput={haddleInput} setActualPage={() => { setActualPage(2) }} />} />
          <Route path="/step-3" element={<StepThree handleInput={haddleInput} setActualPage={() => { setActualPage(3) }} />} />
          <Route path="/step-4" element={<StepFour handleInput={haddleInput} setActualPage={() => { setActualPage(4) }} />} />
          {/*Redirect route when use "/" in URL */}
          <Route path="/" element={<Navigate to="/step-1" />} />
          {/*Error URL */}
          <Route path="*" element={
            <div>
              <h1>Page Not found</h1>
              <a href="/">Click here</a>
            </div>
          } />
        </Routes>
      </section>

      <footer>
        <Button />
        <Link className="button" id='nextButton' to={`/step-${actualPage + 1}`}
          onClick={() => {
            if (actualPage > 1) {
              setActualPage(actualPage + 1)
            }
            handleSaveData(formData);
          }}>Next Step</Link>
      </footer>
    </>
  )
}
