Vue.component('card-image', {
    props: ['gif'],
    data() {
        return {
            fbSharelink: `https://www.facebook.com/sharer/sharer.php?u=`,
            last: '&amp;src=sdkpreparse%2F&amp;src=sdkpreparse'
        }
    },
    methods: {
        getlink(value) {
            return this.fbSharelink + value + this.last
        },
        getWhatsApp() {
            return `https://api.whatsapp.com/send?phone=&text=%20%0D%0A${this.gif.title}%0D%0A${this.gif.gif}`
        }

    },
    template: `
    <div class="container">
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
                    <button class="btn btn-primary" :data-href="gif.gif">
                    <a target="_blank" :href="getlink(gif.gif)" class="fb-xfbml-parse-ignore"><i class="fab fa-facebook-square"></i>&nbspShare</a>
                    </button>
                    
                    <a target="_blank" :href="getWhatsApp()">SHARE
                        WA</a>
                </div>
                
            </div>
                
        </div>
    </div>
    
    `
})