import React from 'react'
import './App.css'
import { BrowserRouter  } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavComponent from './components/NavComponent'
import FooterComponent from './components/FooterComponent'
import { GlobalProvider } from './context/GlobalContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='bg-gray-50'>
          <GlobalProvider>
            <NavComponent/>
            <AppRoutes/> 
            <FooterComponent/>
          </GlobalProvider>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
