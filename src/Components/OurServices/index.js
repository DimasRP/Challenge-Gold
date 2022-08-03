
import ServicesImg from "../../Assets/img_service.png"
import './Services.css'
import icon_check from "../../Assets/icon_check.png"
const OurServices = () => {
    return (

        <div id="ourservices" className="container-Services container">
            <div className="row">
                <div className='img col-md-6 imgServices'>
                    <img className="imgCar" src={ServicesImg}></img>
                </div>
                <div className='col-md-6'>
                    <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <div className="list-rental">
                        <p><img src={icon_check}/> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        <p><img src={icon_check}/> Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        <p><img src={icon_check}/> Sewa Mobil Jangka Panjang Bulanan</p>
                        <p><img src={icon_check}/> Gratis Antar - Jemput Mobil di Bandara</p>
                        <p><img src={icon_check}/> Layanan Airport Transfer / Drop In Out</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurServices