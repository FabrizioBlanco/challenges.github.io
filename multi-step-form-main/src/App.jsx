import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import StepOne from './steps/Step-1/StepOne'
import StepTwo from './steps/Step-2/StepTwo'
import StepThree from './steps/Step-3/StepThree'
import StepFour from './steps/Step-4/StepFour'

export default function App() {

  /**
   * Define routes from React Router V6.
   */
  return (
    <div id='mainContainer'>
      <BrowserRouter>
        <Routes>
          <Route path="/step-1" element={<StepOne />} />
          <Route path="/step-2" element={<StepTwo />} />
          <Route path="/step-3" element={<StepThree />} />
          <Route path="/step-4" element={<StepFour />} />
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
      </BrowserRouter>
    </div>

  )
}
