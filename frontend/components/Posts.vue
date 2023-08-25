<template>
    <div>
        <h1 class="text-center m-auto mt-10 bg-orange-600">Here is posts page/main page</h1>
        <div class="post-details flex flex-row justify-between">
            <div>Post ID</div>
            <div>Author Name</div>
            <div>Author Pic</div>
            <div>Post Title</div>
            <div>Post Tag</div>
            <div>Post Pic</div>
            <div>Post Content</div>
            <div>Creation Time</div>
        </div>
        <div v-for="post in posts" :key="post.id" class="post-details flex flex-row">
            <div>{{ post.id }}</div>
            <div>{{ post.author_name }}</div>
            <div><img :src="post.author_profile_url" alt=""></div>
            <div>{{ post.title }}</div>
            <div>{{ post.tag }}</div>
            <div><img :src="post.image_url" alt=""></div>
            <div>{{ post.content }}</div>
            <div>{{ post.createdAt }}</div>
        </div>
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
.post-details>div{
    margin:1rem 1rem 1rem 1rem;
}
</style>