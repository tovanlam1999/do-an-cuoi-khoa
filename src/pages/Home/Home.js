import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BannerBox from "../../components/bannerbox/BannerBox";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

;


export default function Home () {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Banner/>
            <BannerBox/>
            <Footer/>
        </div>
    )
}