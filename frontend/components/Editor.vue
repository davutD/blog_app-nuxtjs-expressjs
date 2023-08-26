<template>
  <div>
    <div class="flex flex-row justify-center mt-10">
      <form action="post" class="flex flex-col w-3/5 border p-5 rounded-lg">
        <h1 class="text-center">Blog Editor</h1>
        <input type="text" placeholder="Title">
        <input type="text" placeholder="Tags">
        <textarea placeholder="Article content..." cols="30" rows="10"></textarea>
      </form>
    </div>
  </div>
</template>

<script setup>



</script>

<style lang="css">
input,textarea{
  border: none;
  margin:5px 0;
  background-color: rgb(243, 240, 240);
  border-radius: 5px;
  padding: 5px 10px;
  color:rgb(78, 78, 78);
}
textarea{
  padding: 10px 20px;
  font-size: large;

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