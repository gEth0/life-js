import NavBar from './components/NavBar/Navbar'
import './App.css'
import { useState } from 'react'
import Page from './components/Page/Page'
import Footer from './components/Footer/Footer'

function App() {
  const [date, setDate] = useState();
  const [values, setValues] = useState();

  return (
    <div className="app-container">
      <NavBar date={date} values={values} />
      <div className="content">
        <Page date={date} setDate={setDate} setValues={setValues} values={values} />
      </div>
      <Footer />
    </div>
  )
}

export default App;
