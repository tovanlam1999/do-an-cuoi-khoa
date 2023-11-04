import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import NewProduct from "../../components/newproduct/NewProduct";
import Sale from "../../components/sale/Sale";

;


export default function Home () {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Banner/>
            <Category/>
            <NewProduct/>
            <Sale/>
            <Footer/>
        </div>
    )
}