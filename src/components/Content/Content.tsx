import { useState } from 'react'
import { Countdown } from '../Countdown/Countdown'
import './Content.scss'

export const Content = ({showInfo, setShowInfo}: {showInfo: boolean, setShowInfo:  React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className={`content-container`} style={{opacity: showInfo ? '0' : ''}} onClick={showInfo ? () => setShowInfo(false) : () => {}}>
            <Countdown targetDate={'2024-12-27T00:00:00'}/>
        </div>
    )
}