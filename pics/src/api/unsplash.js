import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',    
    headers:{
        Authorization: 'Client-ID 8603082c4200a6e4b95cb4da03b1f02fdea38e29ca0622da6594d9ff21ea3df8'
    }

});