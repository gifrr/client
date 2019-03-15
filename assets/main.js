 const app = new Vue({
     el: '#app',
     data: {
         dataFilter: [],
     },

     methods: {
         filterGif(payload) {
             axios.get(`http://localhost:3000/gif?search=${payload}`)
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