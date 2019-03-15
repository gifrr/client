Vue.component('filter-result', {
    props: ['data-filter'],
    template: `
    <div>
        <div class="container"v-for="data in dataFilter">
            <card-image v-bind:gif="data"></card-image>
        </div>
    </div>
    
    `
})