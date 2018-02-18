import axios from 'axios';

const APIKEY = ''
const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}&q=`;

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    }
};
