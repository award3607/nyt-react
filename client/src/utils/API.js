import axios from 'axios';

const APIKEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931'
const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}`;

export default {
    search: function(query) {
        console.log(`Query was: ${query}`);
        return axios.get(BASEURL + query);
    },
    saveArticle: function(data) {
        console.log(`Saving ${data.title}`);
        return axios.post('/api/articles', data);
    },
    getArticles: function() {
        console.log('Getting saved articles');
        return axios.get('/api/articles');
    }
};
