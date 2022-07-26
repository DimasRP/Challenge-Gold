import Footer from "../../Components/Footer"
import Banner from "../../Components/Banner"
import NavBar from "../../Components/Navbar";
import OurServices from "../../Components/OurServices"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import WhyUs from "../../Components/WhyUs";
import Testimonial from "../../Components/Testimonial";
import CTA from "../../Components/CTABanner";
import FAQ from "../../Components/Faq";

const Home = () => {
    return (
        <div className="">
            <NavBar/>
            <Banner/>
            <OurServices/>
            <WhyUs/>
            <Testimonial/>
            <CTA/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Home