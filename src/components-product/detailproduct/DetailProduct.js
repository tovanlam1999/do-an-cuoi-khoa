import { Col, Container, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListDetail from '../../pages/Listdetail/ListDetail';
import ListProduct from '../listproduct/ListProduct';
export default function DetailProduct(props) {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const getData = () => {
        const api = `https://653e66669e8bd3be29df402b.mockapi.io/dog-cat-food/`;
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
        <div className="detailproduct">
            <ListProduct product={data}/>
        </div>
    );
}
