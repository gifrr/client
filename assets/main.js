
const baseURL = axios.create({
    baseURL: `http://localhost:3000`
})

 const app = new Vue({
     el: '#app',
     data: {
         dataFilter: [],
     },

     methods: {
         filterGif(payload) {
             baseURL
               .get(`http://localhost:3000/gifs?search=${payload}`)
                 .then(({
                     data
                 }) => {
                     this.dataFilter = data

                 })
                 .catch((err) => {
                     console.log(err);

                 })

         },

     }
 })