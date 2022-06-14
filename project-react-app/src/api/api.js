import axios from "axios";

export default class APIService {
    static async getHome() {
        return await axios.get(`http://localhost:3002/api/v1/home`);
    }
}