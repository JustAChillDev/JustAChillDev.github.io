import { useState } from 'react'
import { Countdown } from '../Countdown/Countdown'
import './Content.scss'

export const Content = ({showInfo, setShowInfo, showEA, setShowEA}: {showInfo: boolean, setShowInfo:  React.Dispatch<React.SetStateAction<boolean>>, showEA: boolean, setShowEA:  React.Dispatch<React.SetStateAction<boolean>>}) => {

    const display = showEA || showInfo

    return (
        <div className={`content-container`} style={{opacity: display ? '0' : ''}} onClick={display ? () => setShowInfo(false) : () => {}}>
            <Countdown targetDate={'2024-12-27T00:00:00'}/>
        </div>
    )
}