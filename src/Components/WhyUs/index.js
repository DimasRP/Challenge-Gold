
import iconCompl from "../../Assets/icon_complete.png"
import iconPrice from "../../Assets/icon_price.png"
import icon24 from "../../Assets/icon_24hrs.png"
import iconProf from "../../Assets/icon_professional.png"
import './WhyUs.css'
const WhyUs = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="wUs">
                    <h1>Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                    <div className="list-WhyUs">
                        <div className="border-items">
                            <img src={iconCompl}></img>
                            <h7>Mobil Lengkap</h7>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                        <div className="border-items">
                        <img src={iconPrice}></img>
                            <h7>Mobil Lengkap</h7>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                        <div className="border-items">
                        <img src={icon24}></img>
                            <h7>Mobil Lengkap</h7>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                        <div className="border-items">
                        <img src={iconProf}></img>
                            <h7>Mobil Lengkap</h7>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                
            </div>

        </div>
    )
}

export default WhyUs