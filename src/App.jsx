import NavBar from './components/NavBar/Navbar'
import './App.css'
import { useState } from 'react'
import Page from './components/Page/Page'

function App() {

  const [date, setDate] = useState()
  const [values, setValues] = useState()
  return (
    <>
      <NavBar />
      <Page date={date} setDate={setDate} setValues={setValues} values={values} />
    </>
  )
}

export default App
