<template>
    <div>
        <v-card
        class="mx-auto text-center mt-10"
        max-width="344"
        title="Login Page"
            >
        <v-container>
        <v-text-field
            v-model="email"
            color="primary"
            label="Email"
            variant="underlined"
            placeholder="Enter your email"
        ></v-text-field>

        <v-text-field
            type="password"
            v-model="password1"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            variant="underlined"
        ></v-text-field>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn @click="login" class="w-full" color="success">
            Login

            <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
        </v-card-actions>
        </v-card>
        <v-alert class="mt-10 w-1/3 m-auto" v-if="err" :text="err" type="warning" variant="tonal"></v-alert>
        
    </div>
</template>

<script setup>
import AuthenticationService from '../services/AuthenticationService'
import { useUserStore } from '../store/UserStore'

const email=ref('')
const password1=ref('')
const password2=ref('')
const router=useRouter()
const err=ref('')

const userStore=useUserStore()

const login=async()=>{
    try{
        const response = await AuthenticationService.login({
            email:email.value,
            password:password1.value
        })
        userStore.setToken(response.data.token)
        userStore.setUser(response.data.user)
        router.push('/posts')
    }catch(error){
        err.value=error.response.data.error
    }
}

</script>

<style lang="css">

</style>