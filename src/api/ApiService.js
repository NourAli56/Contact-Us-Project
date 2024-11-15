import axios from "axios";

class ApiService {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL,
            timeout: 10000,
        });
        this.api.interceptors.request.use(
            (config) => {
                console.log(`[Request] ${config.method.toUpperCase()}: ${config.url}`);
                return config;
            },
            (error) => {
                console.error("[Request Error]:", error.message);
                return Promise.reject(error);
            }
        );
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                console.error("API Error:", error.response?.data?.message || error.message);
                return Promise.reject(error);
            }
        );
    }

    get(endpoint, params = {}) {
        return this.api.get(endpoint, { params });
    }

    post(endpoint, data = {}, config = {}) {
        return this.api.post(endpoint, data, config);
    }

    put(endpoint, data = {}, config = {}) {
        return this.api.put(endpoint, data, config);
    }

    delete(endpoint, config = {}) {
        return this.api.delete(endpoint, config);
    }
}

const apiService = new ApiService("https://testing.rentchicken.net/api");
export default apiService;
