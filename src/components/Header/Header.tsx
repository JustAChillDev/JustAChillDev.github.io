import './Header.scss'
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { InfoModal } from '../InfoModal/InfoModal';
import logo from '../../assets/images/logo.png'
import { EarlyAccessModal } from '../InfoModal/EarlyAccessModal';


export const Header = ({showInfo, setShowInfo, showEA, setShowEA}: {showInfo: boolean, setShowInfo:  React.Dispatch<React.SetStateAction<boolean>>, showEA: boolean, setShowEA:  React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className="header-container">
            <div className='left section'><p onClick={() => setShowInfo(true)} className='icon'>Info</p>
            <p onClick={() => setShowEA(true)} className='icon'>Early Access</p></div>

            <div className='center section'>
            </div>
            <div className='right section'><FaTwitter className='social' onClick={() => window.open('https://x.com/Obsidiancoin1')}/><FaRedditAlien className='social' onClick={() => window.open('https://www.reddit.com/user/ObsidianCoinOfficial/')} /><FaInstagram className='social' /></div>
            <InfoModal show={showInfo} setShow={setShowInfo}/>
            <EarlyAccessModal show={showEA} setShow={setShowEA}/>

        </div>
    )
}