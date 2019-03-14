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