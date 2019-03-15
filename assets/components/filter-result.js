Vue.component('filter-result', {
    props: ['data-filter'],
    template: `
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6"  v-for="data in dataFilter">
                    <card-image v-bind:gif="data"></card-image>
                </div>
            </div>
        </div>
    </div>
    `
})