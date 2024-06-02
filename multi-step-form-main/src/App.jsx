import './App.css'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import React, { useState } from 'react';
import StepOne from './steps/Step-1/StepOne'
import StepTwo from './steps/Step-2/StepTwo'
import StepThree from './steps/Step-3/StepThree'
import StepFour from './steps/Step-4/StepFour'
import Confirm from './steps/Confirm/Confirm'

export default function App() {
  const [actualPage, setActualPage] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    price: 0,
    sub: 0,
    subName: 'arcade',
    addOn: []
  })
  const [backData, setBackData] = useState(null)
  const [selectedPrices, setSelectedPrices] = useState({
    price1: 0,
    price2: 0,
    price3: 0
  })
  /**
    * restore info back up with a "Go back" button 
    */
  const saveBackUp = () => {
    setBackData({ ...formData, selectedPrices })
  }
  /**
   * Restore Back up with a "Go back" button 
   */
  const restoreBackUp = () => {
    if (backData) {
      setFormData({ ...backData })
    }
  }

  /**
   * just make a render when button is press
   */
  const hadleInput = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }
  /**
   * Handle data from StepOne component
   */
  const handleSaveData = (data) => {
    setFormData(data)
  }

  const handleStepThreeChange = (price1, price2, price3) => {
    setSelectedPrices({
      price1: price1,
      price2: price2,
      price3: price3
    })
  }
  /**
   * Disable button "Go Back" if step is 1
   */
  function Button() {
    if (actualPage > 1 && actualPage !== 5) {
      return <>
        <Link
          className="button"
          id='backButton'
          onClick={
            () => {
              setActualPage(1)
            }}
          to={`/step-1`}
        >Go Back</Link>
      </>
    } else {
      //Any element just to fill DOM space. Do not pay attention  to this
      return <><p></p></>
    }
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
        <span className={`step ${actualPage === 4 ? "selectStep" : actualPage === 5 ? "selectStep" : ""}`}>4</span>
      </header>
      <section id='mainContainer'>
        <Routes>
          <Route path="/step-1" element={<StepOne handleInput={hadleInput} setActualPage={() => { setActualPage(1) }} />} />
          <Route path="/step-2" element={<StepTwo handleInput={hadleInput} formData={formData} setFormData={setFormData} setActualPage={() => { setActualPage(2) }} />} />
          <Route path="/step-3" element={<StepThree handleInput={hadleInput} handleStepThreeChange={handleStepThreeChange} formData={formData} setFormData={setFormData} setActualPage={() => { setActualPage(3) }} />} />
          <Route path="/step-4" element={<StepFour restorebackUp={restoreBackUp} formData={formData} setActualPage={() => { setActualPage(4) }} />} />
          {/* Confirm page */}
          <Route path="/step-5" element={<Confirm newSetActualPage = {setActualPage} setActualPage={() => { setActualPage(5) }} />} />
          {/*Redirect route to /step-1 */}
          <Route path="*" element={<Navigate to="/step-1" />} />
        </Routes>
      </section>
      <footer>
        <Button />
        {actualPage !== 4 ? actualPage === 5 ? "" : <>
          <Link className="button" id='nextButton' to={`/step-${actualPage + 1}`}
            onClick={() => {
              saveBackUp()
              handleSaveData(formData)
              if (actualPage > 1) {
                setActualPage(actualPage + 1)
              }
            }}>Next Step</Link>
        </> : <>
          <Link className="button" id='confirmButton' to={`/step-5`}
            onClick={() => {
              handleSaveData(formData)
              setActualPage(5)
            }}>Confirm</Link>
        </>}

      </footer >
    </>
  )
}
