export default function Product(props) {
    const { index, product } = props;
    console.log(product.img);
    return (
        <div className="Products">
            <a className="thumb">
                
            <img src={`https://loremflickr.com/cache/resized/65535_52692916361_110904eb76_c_640_480_nofilter.jpg`} />
            </a>
            <h3>{product ? product.title : ''}</h3>
            <span>{product ? product.price : ''}</span>
            <div className="review">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            
        </div>
    );
}
