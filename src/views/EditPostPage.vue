<template lang="pug">
  .container
        h1
          | Edit Post
        form( @submit.prevent="editPost()" )
          .form-group
            input.form-control( type="text", name="title", id="title", placeholder="Title", v-model.trim="post.title" )
          .form-group
            textarea.form-control( type="text", rows="5", name="description", id="description", placeholder="Description", v-model.trim="post.description" )
          .form-group
            button.btn.btn-block.btn-primary( type="submit", name="editPost" )
              | edit post
          section
            button.btn.btn-success.btn-block( type="button", @click="goBack()" )
              | go to posts page
</template>

<script>
  import PostsService from '../../services/PostsService'
  export default {
    name: 'EditPostPage',
    data () {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async getPost () {
        const response = await PostsService.getPost({ id: this.$route.params.id })
        this.post.title = response.data.title
        this.post.description = response.data.description
      },
      async editPost () {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.updatePost({
            id: this.$route.params.id,
            title: this.post.title,
            description: this.post.description
          })
          this.$router.push({ name: 'posts' })
        }
      }
    },
    mounted () {
      this.getPost()
    }
  }
</script>
