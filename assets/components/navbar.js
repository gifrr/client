Vue.component('navbar-gifrr', {
    data() {
        return {
            inputFilter: ''
        }
    },
    methods: {
        submitFilter() {
            this.$emit('filter-gif', this.inputFilter)
        },
        showUploadForm() {
            this.$emit('show-form')
        },
        toHomepage(){
            this.$emit('to-homepage')
        }
    },
    template: `
    <div class="container col-sm-12" id="navbar">
        <div class="row">
            <div class="col-sm-4 logo">
                <a class="homepage" href="#" @click="toHomepage">GIFRR</a>
            </div>
            <div class="col-sm-4">

            </div>
            <div class="d-flex justify-content-end col-sm-3 search-bar">
                <form @submit.prevent="submitFilter" action="/action_page.php">
                    <input v-model="inputFilter" type="text" placeholder="Search.." name="search">
                    <button class="btn btn-warning" type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <div class="d-flex justify-content-start col-sm-1 upload">
                <div>
                    <button @click="showUploadForm" class="btn btn-warning">UPLOAD</button>
                </div>
            </div>

        </div>
    </div>
    `
})