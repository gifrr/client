const baseURL = axios.create({
    baseURL: `http://localhost:3000`
})

const app = new Vue({
    el: '#app',
    data: {
        dataFilter: [],
        gifsData: [],
        allGifs: true,
        filterGifs: false,
        uploadGif: false
    },
    methods: {
        toHomepage() {
            this.allGifs = true
            this.filterGifs = false
            this.uploadGif = false
        },
        filterGif(payload) {
            baseURL
                .get(`/gifs?search=${payload}`)
                .then(({ data }) => {
                    this.dataFilter = data
                    this.allGifs = false
                    this.filterGifs = true
                    this.uploadGif = false
                })
                .catch(({ response }) => {
                    console.log(response);
                })
        },
        getAllGifs(payload) {
            baseURL
                .get(`/gifs`)
                .then(({ data }) => {
                    this.gifsData = data
                    if (payload) {
                        this.toHomepage()
                    }
                })
                .catch(({ response }) => {
                    console.log(response);
                })
        },
        showUploadForm() {
            if (!this.uploadGif) {
                this.uploadGif = true
                this.allGifs = false
                this.filterGifs = false
            }
        }
    },
    beforeMount() {
        this.getAllGifs()
    }
})