import './Breadcrumb.css';
import{ Link } from "react-router-dom"
export default function Breadcrumb() {
    return (
        <div className="Breadcrumb">

            <h2>Tất Cả Sản Phẩm</h2>
            <div>
                <Link to={`/`}>Home</Link>
                <span> / Thức ăn khô</span>
            </div>
        </div>
    );
}
