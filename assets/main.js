const baseURL = axios.create({
    baseURL: `http://localhost:3000`
})

const app = new Vue({
    el: '#app',
    data: {
        inputSearchFilter: ''
    },
    methods: {
        filterGif(payload) {
            console.log(payload)
        }
    }
})