<template>
    <div class="blog-page container mx-auto mb-16 pt-16 w-3/4">
      <div class="all-posts mt-20 p-4 lg:px-0 lg:pt-6 grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard v-for="post in posts" :key="post.id"/>
      </div>
      <button class="read-more" @click="loadMore">
        <span>Read More</span>
      </button>
    </div>
</template>

<script setup>
import PostService from '../services/PostService'

const posts=ref([])

onMounted(async ()=>{
    posts.value = (await PostService.index()).data
    console.log(posts)
})

</script>

<style lang="css">
.top-post {
  grid-column: 1 / -1;
}
.top-post > .image{
	border-top-right-radius: 0rem;
	border-bottom-left-radius: 0.5rem;
}
.top-post .details{
	margin: 2rem 2rem;
}
.top-post:hover{
	transform: scale(1.05);
}
@screen md {
	.top-post.blockcard {
		flex-direction: row;
	}
	.top-post .image{
		height: 100%;
	}
	.top-post .other-details {
		margin-top: auto;
	}
}
@media (max-width:640px){
  .top-post > .image{
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0rem;
  }
  .top-post .details{
    margin: 0rem 0.5rem;
  }
}
.read-more {
	display: block;
	margin: 4rem auto 0;
	border: 1px solid rgb(184, 182, 182);
	border-radius: 0.5rem;
	transition: transform 0.3s ease-in-out;
}
.read-more:hover{
	transform: scale(1.15)
}
</style>