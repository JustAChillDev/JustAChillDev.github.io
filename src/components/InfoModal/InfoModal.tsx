import './InfoModal.scss'

export const InfoModal = ({show, setShow}: {show: boolean, setShow:  React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className='filter' style={{opacity: show ? '1' : '0', zIndex: show ? '10000' : '-10000'}} onClick={() => {setShow(false)
            console.log('clicked')
        }
        }>
            <div className='info-container'>
                <p>Obsidian ($OBS) is more than just a memecoin—it’s a symbol of strength, resilience, and precision. Inspired by the volcanic glass prized for its sharpness and durability, $OBS represents our commitment to creating something solid and enduring in the crypto space.</p>
                <p>Founded by a team of university graduates with a passion for innovation, $OBS is built on a foundation of expertise and a shared mission: to create a safe, reliable coin that brings a strong, united community into the world of memecoins. We aim to provide transparency, trust, and long-term growth in a space often defined by uncertainty.</p>
                <p>At the core of $OBS is our belief in the power of community. Together, we’re carving a path forward, turning challenges into opportunities and ensuring $OBS remains a cornerstone in the future of cryptocurrency.</p>
                <p>#ForgeYourLegacy with Obsidian.</p>
            </div>
        </div>
    )
}