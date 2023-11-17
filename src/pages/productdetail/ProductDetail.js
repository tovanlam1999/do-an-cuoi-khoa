import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components-product/breadcrumb/Breadcrumb";
import DetailProduct from "../../components-product/detailproduct/DetailProduct"

export default function ProductDetail() {
    return (
        <div className="ProductDetail">
            <Header />
            <Navbar />
            <Breadcrumb/>
            <DetailProduct/>
            <Footer />
        </div>
    )
}