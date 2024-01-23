import axios from "axios";

export class ProductService {
    baseURL = "https://spring-project-production.up.railway.app/api/product";

    create(product) {
        return axios.post(this.baseURL + "/create", product).then(res => res.data);
    }

    readAll() {
        return axios.get(this.baseURL).then(res => res.data);
    }
    
    update(product) {
        return axios.put(this.baseURL + "/update/" + product._id, product).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseURL + "/" + id).then(res => res.data);
    }
}