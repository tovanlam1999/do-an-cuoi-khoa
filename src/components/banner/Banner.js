import slider1 from '../../img/slider-1.jpg';
import slider2 from '../../img/slider-2.jpg';
import slider3 from '../../img/slider-3.jpg';
import animation from '../../img/animation-img.jpg';

import './Banner.css';

export default function Baner() {
    return (
        <div className="baner">
            <div className="banner-1">
                <div className="banner-img-top">
                    <img src={animation} />

                    <img src={animation} />
                </div>
                <img src={slider1} />
                <div className="thumb-banner">
                    <h3>Chúng tôi nuôi thú cưng để giải trí</h3>
                    <h1>
                        Giúp thú cưng của bạn
                        <br />
                        thoát khỏi những loài gây khó chịu
                    </h1>
                    <button>Mua Ngay</button>
                </div>
                <div className="banner-img-bottom">
                    <img src={animation} />

                    <img src={animation} />
                </div>
            </div>
            <div className="banner-2">
                <img src={slider2} />
                <div className="thumb-banner">
                    <h3>Chúng tôi nuôi thú cưng để giải trí</h3>
                    <h1>
                        Giúp thú cưng của bạn
                        <br />
                        thoát khỏi những loài gây khó chịu
                    </h1>
                    <button>Mua Ngay</button>
                </div>
            </div>
            <div className="banner-3">
                <img src={slider3} />
                <div className="thumb-banner">
                    <h3>Chúng tôi nuôi thú cưng để giải trí</h3>
                    <h1>
                        Giúp thú cưng của bạn
                        <br />
                        thoát khỏi những loài gây khó chịu
                    </h1>
                    <button>Mua Ngay</button>
                </div>
            </div>
            <div className="prev">
                <div className="prev-left">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div className="prev-right">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    );
}
