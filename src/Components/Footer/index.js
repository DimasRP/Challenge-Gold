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
            <ul className='list faq-items'>
                <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
            </ul>
            <ul className='list'>
                <li><a href='#ourservices'>Our Services</a></li>
                <li><a href='#whyus'>Why Us</a></li>
                <li><a href='#testimonial'>Testimonial</a></li>
                <li><a href='#faq'>FAQ</a></li>
            </ul>
            <div className='list'>
                <p>Connect with us</p>
                <ul className='list items-icon'>
                    <li><a href='https://www.facebook.com/'><img className="icons" src={fb}></img></a></li>
                    <li><a href='https://www.instagram.com/'><img className="icons" src={ig}></img></a></li>
                    <li><a href='https://twitter.com/'><img className="icons" src={twtr}></img></a></li>
                    <li><a href='http://mail.google.com'><img className="icons" src={mail}></img></a></li>
                    <li><a href='https://www.twitch.tv/'><img className="icons" src={twitch}></img></a></li>
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