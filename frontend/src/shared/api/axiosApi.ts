import axios, { type AxiosInstance, AxiosError, type InternalAxiosRequestConfig } from 'axios'


const axiosApi:AxiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL||'http://localhost:5000/api',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
    },
});

    // REQ
    axiosApi.interceptors.request.use((config: InternalAxiosRequestConfig) =>{
        const token = localStorage.getItem("token");
        if(token){
            config.headers.Authorization= `Bearer ${token}`;
        }        
        return config; 
    },
    (error: AxiosError) => {
    return Promise.reject(error);
  }
);

    // res

    axiosApi.interceptors.response.use( (res)=>{
        return res;
    }, (error:AxiosError)=>{
        if(error.response?.status === 401){
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    });

    export default axiosApi;