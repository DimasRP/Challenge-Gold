
import iconCompl from "../../Assets/icon_complete.png"
import iconPrice from "../../Assets/icon_price.png"
import icon24 from "../../Assets/icon_24hrs.png"
import iconProf from "../../Assets/icon_professional.png"
import './WhyUs.css'
const WhyUs = () => {
    return (
        <div id="whyus" className="container">
            <div className="title">
                <h1>Why Us?</h1>
                <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="list-WhyUs">
                <div className="border-items">
                    <img src={iconCompl}></img>
                    <h7>Harga Murah</h7>
                    <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
                <div className="border-items">
                <img src={iconPrice}></img>
                    <h7>Mobil Lengkap</h7>
                    <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
                <div className="border-items">
                <img src={icon24}></img>
                    <h7>Layanan 24 Jam</h7>
                    <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
                <div className="border-items">
                <img src={iconProf}></img>
                    <h7>Sopir Profesional</h7>
                    <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs