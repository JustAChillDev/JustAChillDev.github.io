import './InfoModal.scss'

export const EarlyAccessModal = ({show, setShow}: {show: boolean, setShow:  React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className='filter' style={{opacity: show ? '1' : '0', zIndex: show ? '10000' : '-10000'}} onClick={() => {setShow(false)
            console.log('clicked')
        }
        }>
                <iframe className='form' src="https://docs.google.com/forms/d/e/1FAIpQLSctWp5YgbTSj6CBTX3FiYoEktZs3FC7Rl4Czvzx3tx_VuI88g/viewform?embedded=true" width="640" height="416">Loading…</iframe>
        </div>
    )
}