import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import './App.css'
import { Footer } from './components/Footer/Footer'


const App = () => {

  return (
    <div className='app-body'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
