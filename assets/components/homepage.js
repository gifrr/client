Vue.component('homepage', {
    props: ['allgifsdata'],
    template: `
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 mb-3" v-for="singleGif in allgifsdata">
                    <card-image v-bind:gif="singleGif"></card-image>
                </div>
            </div>
        </div>
    </div>
    `
})