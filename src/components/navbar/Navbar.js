import { Container } from 'reactstrap';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import ListDetail from '../../pages/Listdetail/ListDetail';
import { useEffect, useRef, useState } from 'react';
export default function Navbar() {
    const [changeColor, setChangeColor] = useState(null);
    const location = useLocation();
    const handle_Click = (index) => {
        setChangeColor(index);
    };
    // khi location.pathname nay thay đổi useEffect sẽ chạy
    useEffect(() => {
        const pathname = location.pathname;
        switch (pathname) {
            case '/':
                setChangeColor(0);
                break;
            case '/':
                setChangeColor(1);
                break;
            case 'petshop/san-pham':
                setChangeColor(2);
                break;
            case '/':
                setChangeColor(3);
                break;
            case '/':
                setChangeColor(4);
                break;
            case '/':
                setChangeColor(5);
                break;

        default:
            setChangeColor(null);
            
        }
    }, [location.pathname]);

    console.log(changeColor)
    return (
        <div className="wrap">
            <Container className="navbar_main">
                <ul className="navbar_list">
                    <li className={changeColor === 0 ? 'active' : ''} onClick={() => handle_Click(0)}>
                        <Link to={`/`}>Trang Chủ</Link>
                    </li>
                    <li className={changeColor === 1 ? 'active' : ''} onClick={() => handle_Click(1)}>
                        <Link to={`petshop/khuyen-mai`}>Khuyến mãi</Link>
                    </li>
                    <li className={changeColor === 2 ? 'active' : ''} onClick={() => handle_Click(2)}>
                        <Link to={`petshop/san-pham`}>Sản Phẩm</Link>
                    </li>
                    <li className={changeColor === 3 ? 'active' : ''} onClick={() => handle_Click(3)}>
                        <Link to={`petshop/dich-vu`}>Dịch Vụ</Link>
                    </li>
                    <li className={changeColor === 4 ? 'active' : ''} onClick={() => handle_Click(4)}>
                        <Link to={`petshop/blogs`}>Blogs</Link>
                    </li>
                    <li className={changeColor === 5 ? 'active' : ''} onClick={() => handle_Click(5)}>
                        <Link to={`petshop/lien-he`}>Liên Hệ</Link>
                    </li>
                </ul>
            </Container>
        </div>
    );
}
