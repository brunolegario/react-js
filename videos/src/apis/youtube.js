import axios from 'axios';

const KEY = 'AIzaSyCm0bkqWAww82ykmQUPpXjuJKnK1nAKBCc';

export default axios.create({
    
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }

});