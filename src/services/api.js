import axios from "axios";
 
const BASE_API = "https://fakestoreapi.com"
const GetProducts = async () => {
    const response = await axios.get(`${BASE_API}/products`)
    return response.data
}
export { GetProducts };