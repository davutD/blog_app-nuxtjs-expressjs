<template>
    <div>

    </div>
</template>

<script setup>
import PostService from '../services/PostService'

const posts=ref()

onMounted(async ()=>{
    posts.value = await PostService.index({

    })
})

</script>

<style lang="css">

</style>