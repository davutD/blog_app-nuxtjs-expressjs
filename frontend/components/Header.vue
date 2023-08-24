<template>
    <!-- <div>
        <div class="header flex flex-row w-full h-12 bg-blue-500 z-50 justify-center">
            <NuxtLink to="/"><button class="h-12 px-6">Home</button></NuxtLink>
            <NuxtLink to="/login"><button class="h-12 px-6">Login</button></NuxtLink>
            <NuxtLink to="/register"><button class="h-12 px-6">Register</button></NuxtLink>
            
        </div>
    </div> -->

    <v-toolbar color="blue" :elevation="8">
            <v-toolbar-items>
                <NuxtLink class="h-full" to="/"><v-btn>Home</v-btn></NuxtLink>
                <NuxtLink class="h-full" to="/login"><v-btn>Login</v-btn></NuxtLink>
                <NuxtLink class="h-full" to="/register"><v-btn>Register</v-btn></NuxtLink>
            </v-toolbar-items>
    </v-toolbar>
</template>

<script setup>

</script>

<style lang="css">
button{
    color: white;
    border: 1px solid white;
}
</style>