import { Link } from 'react-router-dom'
import './CTA.css'
const CTA = () => {
    return (

        <div className="container">
            <div className='cta-bg'>
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Link to="/carimobil">
                    <button className="btn">Mulai Sewa Mobil</button>
                </Link>
               
            </div>
        </div>
    )
}

export default CTA