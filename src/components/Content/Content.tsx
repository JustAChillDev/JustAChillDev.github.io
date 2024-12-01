import { useState } from 'react'
import { Countdown } from '../Countdown/Countdown'
import './Content.scss'

export const Content = () => {

  const [mobile, setMobile] = useState<boolean>(window.innerWidth < 600)

    return (
        <div className='content-container'>
            <Countdown targetDate={'2024-12-27T00:00:00'}/>
        </div>
    )
}