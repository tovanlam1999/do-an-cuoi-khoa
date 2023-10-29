import { Col, Row } from 'reactstrap';
import BannerBox1 from '../../img/banner-3.jpg';
import BannerBox2 from '../../img/banner-4.jpg';
import './BannerBox.css';

export default function BannerBox() {
    return (
        <div className="BannerBox">
            <Row>
                <Col className="col-6 bannerbox-item">
                    <img src={BannerBox1} />
                    <div className='thumb'>
                        <h2>Sản Phẩm Mới</h2>
                        <h6>Nhu Cầu Yếu Phẩm Hằng Ngày</h6>
                        <button>Xem Tất Cả</button>
                    </div>
                </Col>
                <Col className="col-6 bannerbox-item">
                    <img src={BannerBox2} />
                    <div className='thumb'>
                        <h2>Sản Phẩm Khuyến Mãi</h2>
                        <h6>Nhu Cầu Yếu Phẩm Hằng Ngày</h6>
                        <button>Xem Tất Cả</button>
                    </div>
                </Col>
               
            </Row>
        </div>
    );
}
