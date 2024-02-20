import React, { FunctionComponent } from "react";  

interface ProductType {
    data: {
        thumbnail: string;
        title: string;
        description: string;
    }
}
const CardComponent: FunctionComponent<ProductType> = ({data}) => {

    return (
            <div>
                <img src={data.thumbnail} alt={data.title + ' thumbnail'} />
                <div>{data.title}</div>
                <div>{data.description}</div>
            </div>
    );
}

export default CardComponent;