Vue.component('filter-result', {
    data() {
        return {
            foundedGif: true,
        }
    },
    props: ['datafilter'],
    created() {
        if (this.datafilter.length == 0) {
            this.changeFoundedGif()
        } else {
            this.foundedGif = true
        }
    },
    watch: {
        datafilter(v) {
            if (v.length == 0) {
                this.changeFoundedGif()
            } else {
                this.foundedGif = true
            }
        }
    },
    methods: {
        changeFoundedGif() {
            this.foundedGif = false
        }
    },
    template: `
    <div>
        <div class="container" v-if="foundedGif">
            <div class="row">
                <div class="col-sm-6" v-for="data in datafilter">
                    <card-image v-bind:gif="data"></card-image>
                </div>
            </div>
        </div>
        <div class="container d-flex justify-content-center mt-5" v-else>
            <img src="https://cdn.dribbble.com/users/497127/screenshots/2309639/404-planet.gif" />
        </div>
    </div>


    `
})