<template>
  <div class="w-2/3 m-auto mt-10">
    <QuillEditor theme="snow" toolbar="full" contentType="html" v-model:content="content"/>
    <button @click="displayContent" class="border flex m-auto rounded-lg mt-5">Click</button>
    <div v-html="content"></div>
  </div>
</template>

<script setup>
import { QuillEditor,Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { useUserStore } from '../store/UserStore'

const userStore=useUserStore()
const content=ref('')
const router=useRouter()

onMounted(()=>{
  if(userStore.token==null && userStore.user==null)
  {
    router.push('/login')
  }
})

const displayContent=()=>{
    console.log(content)
}

</script>

<style lang="css">

</style>