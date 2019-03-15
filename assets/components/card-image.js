Vue.component('card-image', {
    props: ['gif'],
    data() {
        return {
            fbSharelink: `https://www.facebook.com/sharer/sharer.php?u=`,
            last: '&amp;src=sdkpreparse%2F&amp;src=sdkpreparse'
        }
    },
    methods: {
        getlink() {
            return this.fbSharelink + this.gif.gif + this.last
        }
    },
    template: `
        <div class="card" style="width:400px">
            <img class="card-img-top" :src="gif.gif" alt="Card image"
                style="width:100%">
            <div class="card-body">
                <h4 class="card-title">{{gif.title}}</h4>
                <span v-for="tag in gif.tags">
                    <button class="btn btn-danger">{{tag.name}}</button> &nbsp
                </span>
                <br><br>
                
                <div class="fb-share-button" :data-href="gif.gif" data-layout="button" data-size="large">
                    <a target="_blank" :href="getlink()" class="fb-xfbml-parse-ignore">Share</a>
                </div>
             
            </div>
                
        </div>
    `
})