<template>
    <div class="flex flex-col">
        <Header/>
        <div class="flex flex-row h-auto w-full my-10 border border-red-400">
            <div class="left-column border h-auto w-2/12">left column(fill blank)</div>
            <div class="middle-column flex flex-col border h-auto w-7/12">
                <div class="content-head border">image and title here</div>
                <div class="content-body border">all blog content here</div>
            </div>
            <div class="right-column border h-auto w-3/12">right column(fill tocbot)</div>
        </div>
    </div>
</template>

<script setup>
import PostService from "../../services/PostService"

const route=useRoute()
const id=route.params.id
const post=ref([])

onMounted(async ()=>{
    post.value = (await PostService.getPost(id)).data
    console.log(post)
})

</script>

<style lang="css">
.content-head{
    height: 30rem;
}
</style>