import { useState, useEffect } from 'react';
import './Countdown.scss';
import logo from '../../assets/images/logo.png'

export const Countdown = ({targetDate}:{targetDate: string}) => {
    const calculateTimeLeft = (endDate: string) => {
        const difference = +new Date(endDate) - +new Date();
        let timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

      useEffect(() => {
        const interval = setInterval(() => {
          setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
    
        return () => clearInterval(interval);
      }, [targetDate]);
      


      return (
        <div className='main-content'>

          {/* <div className='brand-area'>
            <img src={logo} className='logo'></img>
            Obsidian
          </div> */}
        <span className='big-text'>JOURNEY BEGINS IN</span>
        <div className='countdown-container'>
            <div className='box'>
              {timeLeft.days.toString().padStart(2, '0')}
              <div className='label'>DAYS</div>
            </div>
            <div className='box'>
              {timeLeft.hours.toString().padStart(2, '0')}
              <div className='label'>HOURS</div>
            </div>
            <div className='box'>
              {timeLeft.minutes.toString().padStart(2, '0')}
              <div className='label'>MINUTES</div>
            </div>
            <div className='box'>
              {timeLeft.seconds.toString().padStart(2, '0')}
              <div className='label'>SECONDS</div>
            </div>
        </div>
        <p className='small-text'>Hold tight as we prepare to unveil Obsidian, the future of Solana. Follow us on Twitter for updates!</p>
        <p className='medium-text'>#ForgeYourLegacy</p>
        </div>
      );
    
}