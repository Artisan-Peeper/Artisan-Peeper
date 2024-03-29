import React from 'react';
import ApplicantFooter from './components/ApplicantFooter.jsx'
import EmployerFooter from './components/EmployerFooter.jsx';
import ErrorMSG from './components/error.jsx'

const App = () => {
  return (
    <>
      
      <div className="h-screen w-screen flex justify-center items-center">
        <ErrorMSG/>
      </div>
      {/* <ApplicantFooter /> */}
      {/* <EmployerFooter /> */}
    </>
  )
}

export default App