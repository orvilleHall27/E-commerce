import React, { FunctionComponent, useEffect, useState } from "react";
import CardComponent from "../../components/Card";
import {getAllProducts}from "../../services/productService";

interface ProductType{
    data?: any;
}
const ProductPage: FunctionComponent<ProductType> = () => {
    const [data, setData] = useState([]);

    //fetches all products
    useEffect(() =>{
        const fetchedData = getAllProducts();
        fetchedData.then(res=> {
            setData(res.data?.products);
        })
     },[]);

     return (
     <div>
            {data.map(prop => (
                <CardComponent data ={prop} key={prop.id}/> 
            ))}
     </div>
        
        
    );
}

export default ProductPage;