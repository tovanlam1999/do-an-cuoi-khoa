import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import NewProduct from "../../components/newproduct/NewProduct";
import Sale from "../../components/sale/Sale";
import AllProDuct from "../../components/allproduct/AllProDuct";
import BannerLogin from "../../components/bannerlogin/BannerLogin";
import OurPartNer from "../../components/ourpartner/OurPartNer";
import Trainers from "../../components/trainers/Trainers";
import OurUpDation from "../../components/ourupdation/OurUpDation";
import PuppyFood from "../../components/puppyfood/PuppyFood";
import Exchange from "../../components/exchange/Exchange";





export default function Home () {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Banner/>
            <Category/>
            <NewProduct/>
            <Sale/>
            <AllProDuct/>
            <BannerLogin/>
            <OurPartNer/>
            <Trainers/>
            <OurUpDation/>
            <PuppyFood/>
            <Exchange/>
            <Footer/>
        </div>
    )
}