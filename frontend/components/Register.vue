<template>
    <div>
        <h1 class="flex flex-row justify-center my-5">Register Page</h1>
        <input class="border border-black rounded flex flex-col m-auto my-1" type="email" name="email" placeholder="example@gmail.com" v-model="email">
        <input class="border border-black rounded flex flex-col m-auto" type="password" name="password" placeholder="12345678" v-model="password">
        <button class="border flex m-auto my-3" @click="register">Register</button>
    </div>
</template>

<script setup>
import AuthenticationService from '../services/AuthenticationService'

const email=ref('')
const password=ref('')

const register=async()=>{
    const response=await AuthenticationService.register({
        email:email.value,
        password:password.value
    })
    console.log(response.data)
}

</script>

<style lang="css">

</style>