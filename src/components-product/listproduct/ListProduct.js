import "./ListProduct.css"




export default function ListProduct (props) {

    const {product} = props;

    return (
        <div className="ListProduct">
            <img src={`${product ? product.img : ""}`}/>
        </div>
    )
}