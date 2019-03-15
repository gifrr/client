Vue.component('create-gif-form', {
    data() {
        return {
            title: '',
            tag: '',
            tags: [],
            gif: '',
            file: '',
            showLoading: false,
            form: true
        }
    },
    components: {
        vueTagsInput: vueTagsInput.default
    },
    methods: {
        toHomepage() {
            this.$emit('to-homepage', 'form')
        },
        postGif() {
            this.form = false
            this.showLoading = true
            let gifData = {
                title: this.title,
                tags: this.tags,
                gif: this.gif
            }
            baseURL({
                url: `/gifs`,
                method: 'post',
                // headers: {
                //     access_token: localStorage.getItem('token')
                // },
                data: gifData
            })
            .then(({data}) => {
                console.log(data)
                this.toHomepage()
                setTimeout(() => { 
                    this.form = true
                    this.showLoading = false
                }, 2500);
                // CreatingArticleSucceed.fire({
                //     type: 'success',
                //     title: 'Article has been created'
                // })
                // this.toMySites()
            })
            .catch(err => {
                console.log(err)
            })
        },
        getFile(e) {
            this.file = e.target.files[0]

            let getTags = new FormData()
            getTags.append("image", this.file)
            baseURL({
                url: `/gifs/generate-tags`,
                method: 'post',
                // headers: {
                //     access_token: localStorage.getItem('token')
                // },
                data: getTags
            })
            .then(({data}) => {
                if (data) {
                    console.log(data)
                    this.tags = data.labels
                    this.gif = data.gif
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    template: `
    <div id="create_post" class="container my-5 d-flex">
        <div v-if="showLoading" style="margin: 0 auto;">
            <img src="https://static-steelkiwi-dev.s3.amazonaws.com/media/filer_public/4e/07/4e07eece-7c84-46e2-944d-1a6b856d7b5f/463ff844-6f36-4ffe-b051-fea983d39223.gif" />
        </div>
        <div id="form-article" class="col-10" v-if="form">
            <!-- <form id="new-post" method="post" v-on:submit.prevent="addArticle"> -->
                <input type="text" placeholder="Title" class="container my-2 form-control" height="100px" style="font-size: 20pt;" v-model="title">
                <div style="position:relative;" class="my-3">
                    <a class='btn btn-primary' href='javascript:;'>
                    Choose File
                    <input type="file" style='position:absolute;z-index:2;top:0;left:0;filter: alpha(opacity=0);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;background-color:transparent;color:transparent;' name="file_source" size="40" @change="getFile">
                    </a>
                    <span class='label label-info' id="upload-file-info"></span>
                </div>
                <template>
                    <div class="mb-3">
                        <vue-tags-input
                        v-model="tag"
                        :tags="tags"
                        @tags-changed="newTags => tags = newTags"
                        />
                    </div>
                </template>
                <div>
                    <button type="submit" @click="postGif" class="mt-2 btn btn-primary btn-sm">Publish</button>
                </div>
            <!-- </form> --> 
        </div>
    </div>            
    `
})