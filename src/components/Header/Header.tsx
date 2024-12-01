import './Header.scss'
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { InfoModal } from '../InfoModal/InfoModal';
import logo from '../../assets/images/logo.png'


export const Header = ({showInfo, setShowInfo}: {showInfo: boolean, setShowInfo:  React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className="header-container">
            <div className='left section icon' onClick={() => setShowInfo(true)}>Info</div>
            <div className='center section'>
                <div className='brand-header'>
                    <img src={logo} className='logo-header'></img>
                Obsidian
                </div>
            </div>
            <div className='right section'><FaTwitter className='social' onClick={() => window.open('https://x.com/Obsidiancoin1')}/><FaRedditAlien className='social' onClick={() => window.open('https://www.reddit.com/user/ObsidianCoinOfficial/')} /><FaInstagram className='social' /></div>
            <InfoModal show={showInfo} setShow={setShowInfo}/>
        </div>
    )
}