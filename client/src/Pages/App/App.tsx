import React, { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Sets from '../Sets/Sets'
import Sewing from '../Sewing/Sewing'
import './null.scss'
import './wrapper.scss'

const App: React.FC = (): ReactElement => {
  return (
    <div className='wrapper'>

      <header className='header'>
       <Header></Header>
      </header>

      <main className='main'>
       <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/sewing' element={<Sewing/>}/>
        <Route path='/sets' element={<Sets/>}/>
       </Routes>
      </main>

      <footer className='footer'>
       <Footer></Footer>
      </footer>

    </div>
  )
}

export default App
