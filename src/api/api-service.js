import axios from 'axios';

const apiService = axios.create({
   baseURL: 'http://localhost:3001',
   timeout: 60000
});

apiService.interceptors.request.use(
   request => requestHandler(request)
);

apiService.interceptors.response.use(
   response => successHandler(response),
   error => errorHandler(error)
);

const requestHandler = (request) => {
   return request;
};

const errorHandler = (error) => {
   return Promise.reject({ ...error })
};

const successHandler = (response) => {
   return response
};

export default apiService;