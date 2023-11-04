import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../product/Product';
import { Row, Col, Container } from 'reactstrap';
import './NewProduct.css';

export default function NewProduct(props) {
    const [data, setData] = useState([]);

    const getData = () => {
        const api = 'https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food';
        axios
            .get(api)
            .then((res) => {
                setData(res.data);
            })
            .catch((Error) => {
                console.log(Error);
            });
    };

    useEffect(() => {
        getData();
    }, []);
    console.log(data);
    return (
        <div className="NewProduct">
            <h2>Danh Mục Thức ăn </h2>
            <div className="NewProduct_bottom">
                <div className="prev">
                    <div className="prev-left">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="prev-right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <Container>
                    <Row className="NewProduct_row">
                        {data.map((item, index) => (
                            <Col sm="6" md="4">
                                <Product product={item} index={index} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}
