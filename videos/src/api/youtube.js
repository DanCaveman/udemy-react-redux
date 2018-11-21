import axios from 'axios';


const YoutubeApiKey = 'AIzaSyBQ8Qv3bIAy8gVnMrfhh6iXXuZT13xji_Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: "5",
        key: YoutubeApiKey
    }
});