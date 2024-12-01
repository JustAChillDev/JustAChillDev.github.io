import './Header.scss'
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Header = () => {
    return (
        <div className="header-container">
            <div className='left section'>Launching soon...</div>
            <div className='center section'></div>
            <div className='right section'><FaTwitter className='social' onClick={() => window.open('https://x.com/Obsidiancoin1')}/><FaRedditAlien className='social' onClick={() => window.open('https://www.reddit.com/user/ObsidianCoinOfficial/')} /><FaInstagram className='social' /></div>
        </div>
    )
}