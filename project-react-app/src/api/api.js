import axios from "axios";

export default class APIService {
    static async getHome() {
        return await axios.get(`http://localhost:3002/api/v1/home`);
    }
    static async getLibrary() {
        return await axios.get(`http://localhost:3002/api/v1/library`);
    }
    static async getShop() {
        return await axios.get(`http://localhost:3002/api/v1/shop`);
    }
}