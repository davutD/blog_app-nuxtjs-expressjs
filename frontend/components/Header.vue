<template>
    <div class="header w-full h-16 flex">
        <div class="border shadow-xl w-11/12 h-12 m-auto flex flex-row justify-between">
            <div class="my-auto mx-2 flex flex-row">
                <button @click="homePage" class="home-page my-auto mx-2 px-10 text-3xl">HOME</button>
                <button @click="editorPage" v-if="userStore.isUserLoggedIn" class="my-auto mx-2">Start Writing</button>
            </div>
            <div class="flex flex-row list-none my-auto">
                <button @click="login" v-if="!userStore.isUserLoggedIn" class="mx-2 shadow-md">Login</button>
                <button @click="register" v-if="!userStore.isUserLoggedIn" class="mx-2 shadow-md">Register</button>
                <button @click="logout" v-if="userStore.isUserLoggedIn" class="mx-2 shadow-md">Log Out</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../store/UserStore'

const userOptions=ref([
        { title: 'Log Out' }
      ])
const userStore=useUserStore()
const router=useRouter()

const homePage=()=>{
    router.push('/')
}
const editorPage=()=>{
    router.push('/editor')
}
const login=()=>{
    router.push('/login')

}
const register=()=>{
    router.push('/register')

}
const logout=()=>{
    userStore.setToken(null)
    userStore.setUser(null)
    router.push('/')
}

</script>

<style lang="css">
.header{
    background-color: #ffc017;
    z-index: 999;
}
button{
    height: 2rem;
    padding: 0 1rem;
}
</style>