import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import './App.css'
import { Footer } from './components/Footer/Footer'


const App = () => {

  const [showInfo, setShowInfo] = useState(false)


  return (
    <div className={`app-body`}>
      <Header showInfo={showInfo} setShowInfo={setShowInfo}/>
      <Content showInfo={showInfo} setShowInfo={setShowInfo}/>
      <Footer />
    </div>
  )
}

export default App
