<template>
    <v-toolbar color="blue" :elevation="8">
            <v-toolbar-items>
                <NuxtLink class="h-full" to="/"><v-btn>Home</v-btn></NuxtLink>
                <NuxtLink v-if="!userStore.isUserLoggedIn" class="h-full" to="/login"><v-btn>Login</v-btn></NuxtLink>
                <NuxtLink v-if="!userStore.isUserLoggedIn" class="h-full" to="/register"><v-btn>Register</v-btn></NuxtLink>
                <NuxtLink v-if="userStore.isUserLoggedIn" @click="logout" class="h-full" to="/"><v-btn>Log Out</v-btn></NuxtLink>
            </v-toolbar-items>
    </v-toolbar>
</template>

<script setup>
import { useUserStore } from '../store/UserStore';

const userStore=useUserStore()

const logout=()=>{
    userStore.setToken(null)
    userStore.setUser(null)
}

</script>

<style lang="css">
button{

}
</style>