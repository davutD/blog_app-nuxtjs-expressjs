<template>
  <div class="w-2/3 m-auto mt-10 flex flex-col border p-2">
    <input type="text" v-model="title" class="input-quill title text-2xl" required placeholder="Enter a title for article...">
    <input type="text" v-model="description" class="input-quill" required placeholder="Briefly mention what it is about...">
    <div class="flex flex-row my-auto mb-8">
      <label class="mx-5 my-auto">Tag:</label>
      <input type="text" class="input-quill" v-model="tag" required placeholder="Tag">   
    </div>
    <QuillEditor theme="snow" toolbar="full" placeholder="Write a story..." contentType="html" v-model:content="content"/>
    <button @click="publish" class="border flex m-auto rounded-lg mt-5 pt-1">Publish</button>
    <div v-html="content"></div>
  </div>
</template>

<script setup>
import { QuillEditor,Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { useUserStore } from '../store/UserStore'
import PostService from '../services/PostService'

const err=ref('')
const content=ref('')
const title=ref('')
const description=ref('')
const tag=ref('')

const router=useRouter()
const userStore=useUserStore()

console.log(userStore.user.name)


const publish=async()=>{
    try{
      const response= await PostService.create({
        title:title.value,
        description:description.value,
        author_name:userStore.user.name,
        author_profile_url:'',
        image_url:'',
        tag:tag.value,
        content:content.value,
      })
      router.push('/')

    }catch(error){
      err.value=error.response.data.error
    }
}

</script>

<style lang="css">
.ql-editor{
  min-height: 10rem;
}
.input-quill::placeholder{
  font-style: italic;
}
.input-quill{
  padding: 0 1rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}
.input-quill[type="text"]:focus,
textarea:focus{
  border: 1px solid transparent;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2); /* Example of a subtle box-shadow */
  outline: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2.5rem;
}
.ql-snow .ql-editor h2 {
    font-size: 2rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.75rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h5 {
    font-size: 1.25rem;
}
.ql-snow .ql-editor h6 {
    font-size: 1rem;
}
.ql-snow .ql-editor p{
    font-size: 1rem;
}
</style>