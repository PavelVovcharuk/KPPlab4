<template lang="pug">
  .container
        h1
          | Posts
        div
          router-link( :to="{ name: 'newPost' }" )
            | add new post
        .loading(align='center', v-if='loading')
          atom-spinner(:animation-duration='1000', :size='60', :color="'#ff1d5e'")
        section.panel.panel-success( v-if="posts.length" )
          table.table.table-striped
            tr
              th Title
              th Description
              th Action
            tr( v-for="(post, index) in posts", :key="index" )
              td {{ post.title }}
              td {{ post.description }}
              td
                router-link( :to="{ name: 'editPost', params: { id: post._id } }" )
                  | edit post
                button.btn.btn-danger.btn-sm( type="button", @click="removePost(post._id)" )
                  | delete

        section.panel.panel-danger( v-else )
          p
            | There are no posts ... Lets add one now!
</template>

<script>
  import PostsService from '../../services/PostsService'
  import {AtomSpinner} from 'epic-spinners'
  export default {
    components: {
      AtomSpinner
    },
    name: 'PostsPage',
    data () {
      return {
        posts: [],
        loading: false
      }
    },
    methods: {
      async getPosts () {
        this.loading = true
        const response = await PostsService.fetchPosts()
        this.loading = true
        this.posts = response.data.posts
      },
      async removePost (value) {
        await PostsService.deletePost(value)
        this.getPosts()
      }
    },
    mounted () {
      this.getPosts()
    }
  }
</script>
