<template>
  <div class="w-2/3 m-auto mt-10 flex flex-col border p-2">
    <input type="text" class="title text-2xl" required placeholder="Enter a title for article...">
    <input type="text" required placeholder="Briefly mention what it is about...">
    <div class="flex flex-row my-auto justify-between mb-8">
      <label class="mx-5 my-auto">Tags:</label>
      <input type="text" required placeholder="#1">
      <input type="text" placeholder="#2">
      <input type="text" placeholder="#3">      
    </div>
    <QuillEditor theme="snow" toolbar="full" placeholder="Compose a story..." contentType="html" v-model:content="content"/>
    <button class="border flex m-auto rounded-lg mt-5 pt-1">Publish</button>
    <div v-html="content"></div>
  </div>
</template>

<script setup>
import { QuillEditor,Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { useUserStore } from '../store/UserStore'

const content=ref('')

</script>

<style lang="css">
.ql-editor{
  height: 10rem;
}
input::placeholder{
  font-style: italic;
}
input{
  padding: 0 1rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}
input[type="text"]:focus,
textarea:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border: 1px solid transparent;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2); /* Example of a subtle box-shadow */
  outline: none;
}
</style>