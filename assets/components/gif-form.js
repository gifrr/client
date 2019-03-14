Vue.component('create-gif-form', {
    data() {
        return {
            title: '',
            tag: '',
            tags: [],
            gif: '',
            file: ''
        }
    },
    components: {
        vueTagsInput: vueTagsInput.default
    },
    methods: {
        postGif() {
            let gifData = {
                title: this.title,
                tags: this.tags,
                gif: this.gif
            }
            // let postReady = new FormData()
            // postReady.append("image", this.file)
            // postReady.append("data", JSON.stringify(data))
            // this.$emit('post-article', postReady)
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
        <div id="form-article" class="col-10">
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
        <div>
            <p>Jualan</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>            
    `
})