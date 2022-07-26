import './Footer.css'
import fb from "../../Assets/icon_facebook.png"
import ig from "../../Assets/icon_instagram.png"
import twtr from "../../Assets/icon_twitter.png"
import mail from "../../Assets/icon_mail.png"
import twitch from "../../Assets/icon_twitch.png"
const Footer = () => {
    return (
        <div className="container container-footer container-fluid">
            {/* <div className=''> */}
            <ul className='list'>
                <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
            </ul>
            <ul className='list'>
                <li>Our Services</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
            </ul>
            <div className='list'>
                <p>Connect with us</p>
                <ul className='list items-icon'>
                
                    <li><img className="icons" src={fb}></img></li>
                    <li><img className="icons" src={ig}></img></li>
                    <li><img className="icons" src={twtr}></img></li>
                    <li><img className="icons" src={mail}></img></li>
                    <li><img className="icons" src={twitch}></img></li>
                </ul>
            </div>
            <div>
                <p>Copyright Binar 2022</p>
                <div className='logo'></div>
            </div>
            {/* </div> */}
            
        </div>
    )
}

export default Footer