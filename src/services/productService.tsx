import axios from "axios";
const baseURL = 'https://dummyjson.com';

 export const getAllProducts = () => {
    try {
        const response = axios.get(`${baseURL}/products`);
        return response;
    }
    catch(err){
        console.log(err);
    }
};

export const getProduct = (id: number) => {
    axios.get(`${baseURL}/product/${id}`)
    .then(response => {
        return response;
    });
}

export const searchProducts = (productInfo: any) => {
    axios.get(`${baseURL}/products/search?q=${productInfo}`)
    .then(response => {
        return response;
    })
}


