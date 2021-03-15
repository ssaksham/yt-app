import axios from "axios";
const KEY = "AIzaSyC5AazAUnagd4mnSff-PU8bfiWWR7cDu-g";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 10,
        key: KEY,
    },
});