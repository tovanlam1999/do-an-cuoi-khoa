
import { Col, Row } from "reactstrap"
import "./Footer.css"




export default function Footer() {
    return (
        <div className="footer">
            <div className="Content">
                <Row>
                    <Col className="Content-item">
                        <h3>Liên hệ chúng tôi</h3>
                        <ul>
                            <li>
                                <i class="fa-solid fa-house"></i>
                                <a>35/33 Bế Văn Cấm, Phường Tân Kiểng,Quận 7,TP Hồ Chí Minh</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                <a>0342610551</a>
                            </li>
                            <li>
                                <i class="fa-regular fa-clock"></i>
                                <a>8h30-19h30 tối</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <a>tovanlam1999@gmail.com</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="Content-item">
                        <h3>Thông tin</h3>
                        <ul>
                            <li>
                                <a>Tìm kiếm</a>
                            </li>
                            <li>
                          
                                <a>Giúp đỡ</a>
                            </li>
                            <li>
                              
                                <a>Về chúng tôi</a>
                            </li>
                            <li>
                               
                                <a>Vị trí cửa hàng</a>
                            </li>
                            <li>
                               
                                <a>Cung Cấp</a>
                            </li>
                            <li>
                               
                                <a>Đơn hàng & Trả hàng</a>
                            </li>
                            <li>
                               
                                <a>Chính sách quyền riêng tư</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="Content-item">
                        <h3>Ủng hộ</h3>
                        <ul>
                            <li>
                                <a>Hỗ trợ 24/7</a>
                            </li>
                            <li>
                          
                                <a>Hỗ trợ email</a>
                            </li>
                            <li>
                              
                                <a>Hỗ trợ trò chuyện</a>
                            </li>
                            <li>
                               
                                <a>Hoàn tiền & Trả lại</a>
                            </li>
                            <li>
                               
                                <a>Câu hỏi thường gặp</a>
                            </li>
                            <li>
                               
                                <a>Điều khoản hỗ trợ</a>
                            </li>
                            <li>
                               
                                <a>Điều khoản hoàn trả</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className="Content-item">
                        <h3>Giúp đỡ</h3>
                        <ul>
                            <li>
                                <a>tìm kiếm nâng cao</a>
                            </li>
                            <li>
                          
                                <a>Đơn hàng & Trả hàng</a>
                            </li>
                            <li>
                              
                                <a>Thông tin vận chuyển</a>
                            </li>
                            <li>
                               
                                <a>Định vị cửa hàng</a>
                            </li>
                            <li>
                               
                               <a>Nghề nghiệp</a>
                           </li>
                           <li>
                               
                               <a>Nghiên cứu</a>
                           </li>
                           <li>
                               
                               <a>Điều khoản sử dụng</a>
                           </li>  
                        </ul>
                    </Col>
                    <Col className="Content-item">
                        <h3>Theo dõi bản tin của chúng tôi</h3>
                        <p>Đăng ký ngay hôm nay và nhận quà tặng hấp dẫn cũng như giảm giá 10% cho đơn hàng đầu tiên của bạn.</p>
                        <input 
                            type="text"
                            placeholder="địa chỉ email của bạn"
                            />
                    </Col>
                   
                    


                </Row>
            </div>
        </div>
    )
}