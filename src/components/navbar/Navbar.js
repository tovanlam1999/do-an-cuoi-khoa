import './Navbar.css';

export default function Navbar() {
    return (
        <div className="wrap">
            <div className="navbar_main">
                {/* <div className="navbar_drpodowm">
                    <i class="fa-solid fa-bars"></i>
                    Danh Mục Sản Phẩm

                    <ul className='nabar_subdrop'>
                        <li><a></a></li>

                    </ul>
                </div> */}
                <ul className="navbar_list">
                    <li>
                        <a>Trang Chủ</a>
                    </li>
                    <li>
                        <a>Khuyến mãi</a>
                    </li>
                    <li>
                        <a>Sản Phẩm</a>
                    </li>
                    <li>
                        <a>Dịch Vụ</a>
                    </li>
                    <li>
                        <a>Blogs</a>
                    </li>
                    <li>
                        <a>Liên Hệ</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
