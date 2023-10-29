import { useEffect, useState } from "react";
import axios from "axios"

export default function Card(props) {
    const [product,setProduct] = useState([]);
    const {ListProduct} = props
  
  return (
    <div className="Card">
        <h1>{ListProduct}</h1>    
    </div>
  );
}


