
import carImage from "../../Assets/img_car.png"
import './Banner.css'
const Banner = () => {
    return (

        <div className=" container-hero">
            <div className="row">
                <div className='hero-list col-md-6'>
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <button className="btn-sewa">Mulai Sewa Mobil</button>
                </div>
                <div className='img col-md-6'>
                    <img className="imgCar" src={carImage}></img>
                </div>
                
            </div>

        </div>
    )
}

export default Banner