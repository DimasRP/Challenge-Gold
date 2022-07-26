import { BsCheckCircle } from "react-icons/bs";
import ServicesImg from "../../Assets/img_service.png"
import './Services.css'
const OurServices = () => {
    return (

        <div className="container-Services container">
            <div className="row">
            <div className='img col-md-6 imgServices'>
                    <img className="imgCar" src={ServicesImg}></img>
                </div>
                <div className='col-md-6'>
                    <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <div>
                    
                        <p><BsCheckCircle color="#0D28A6"/> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        <p><BsCheckCircle color="#0D28A6"/> Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        <p><BsCheckCircle color="#0D28A6"/> Sewa Mobil Jangka Panjang Bulanan</p>
                        <p><BsCheckCircle color="#0D28A6"/> Gratis Antar - Jemput Mobil di Bandara</p>
                        <p><BsCheckCircle color="#0D28A6"/> Layanan Airport Transfer / Drop In Out</p>
                    </div>
                </div>
                
                
            </div>

        </div>
    )
}

export default OurServices