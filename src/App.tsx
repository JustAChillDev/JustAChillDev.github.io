import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import './App.css'
import { Footer } from './components/Footer/Footer'


const App = () => {

  const [showInfo, setShowInfo] = useState(false)
  const [showEarlyAccess, setShowEarlyAccess] = useState(false)



  return (
    <div className={`app-body`}>
      <Header showInfo={showInfo} setShowInfo={setShowInfo} showEA={showEarlyAccess} setShowEA={setShowEarlyAccess}/>
      <Content showInfo={showInfo} setShowInfo={setShowInfo} showEA={showEarlyAccess} setShowEA={setShowEarlyAccess}/>
      <Footer />
    </div>
  )
}

export default App
