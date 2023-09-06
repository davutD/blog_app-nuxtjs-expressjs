<template>
  <div>
    <div class="w-2/3 m-auto mt-10 flex flex-col border p-2">
    <input type="text" v-model="title" class="input-quill title text-2xl" required placeholder="Enter a title for article...">
    <input type="text" v-model="description" class="input-quill" required placeholder="Briefly mention what it is about...">
    <div class="flex flex-row my-auto mb-8">
      <label class="mx-5 my-auto">Tag:</label>
      <input type="text" class="input-quill" v-model="tag" required placeholder="Tag">
      <label class="mx-5 my-auto">Upload Cover Photo:</label>
      <input class="input-quill" type="text" v-model="image_url" placeholder="Image url">
    </div>
    <QuillEditor theme="snow" toolbar="full" contentType="html" v-model:content="content"/>
    <button @click="publish" class="border flex m-auto rounded-lg mt-5 pt-1">Publish</button>
  </div>
  <div v-if="errClient||errServer" class="err-box flex flex-col w-1/2 m-auto mb-10 text-center mt-10 p-2 rounded-sm shadow-md">
       <div v-if="errClient">{{ errClient }}</div>
       <div v-else>{{ errServer }}</div>
    </div>
    <div v-if="isPublished" class="success-box flex flex-col w-1/2 m-auto mb-10 text-center mt-10 p-2 rounded-sm shadow-md">Published!</div>
  </div>
</template>

<script setup>
import { QuillEditor,Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { useUserStore } from '../store/UserStore'
import PostService from '../services/PostService'

const errClient=ref('')
const errServer=ref('')
const isPublished=ref('')
const content=ref('')
const title=ref('')
const description=ref('')
const tag=ref('')
const image_url=ref('')

const router=useRouter()
const userStore=useUserStore()


console.log(userStore.user.name)


const publish=async()=>{
    try{
      if(!content.value||!title.value||!description.value||!tag.value||!image_url.value){
        errClient.value='Please fill all fields before publish!'
      }else{
        const response= await PostService.create({
          title:title.value,
          description:description.value,
          author_name:userStore.user.name,
          author_profile_url:'https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg',
          image_url:image_url.value,
          tag:tag.value,
          content:content.value,
        })
        setTimeout(()=>{
                router.push('/')
            },2000)

            errClient.value=null
            errServer.value=null
            isPublished.value=true
      }
    }catch(error){
      errClient.value=null
      errServer.value=error.response.data.error
    }
}

</script>

<style lang="css">
.err-box{
    background-color: #fff7e1;
    color: #ffc107;
}
.ql-editor{
  min-height: 10rem;
  padding: 2rem;
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