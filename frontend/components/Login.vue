<template>
    <div>
        <div class="mt-12">
            <v-card
            class="mx-auto pa-12 pb-8"
            elevation="8"
            max-width="448"
            rounded="lg"
            >
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

            <v-text-field
                density="compact"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="underlined"
                v-model="email"
                :rules="[() => !!email || 'This field is required']"
                required
            ></v-text-field>

            <div
                class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
                Password

                <!-- <a
                class="text-caption text-decoration-none text-amber"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                >
                Forgot login password?</a
                > -->
            </div>

            <v-text-field
                :type="'password'"
                density="compact"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="underlined"
                v-model="password"
                :rules="[() => !!password || 'This field is required']"
                required
            ></v-text-field>

            <v-btn @click="login" block class="mb-8" color="amber" size="large" variant="tonal">
                Log In
            </v-btn>

            <v-card-text class="text-center">
                <NuxtLink
                class="text-amber text-decoration-none"
                to="/register"
                >
                Register now <v-icon icon="mdi-chevron-right"></v-icon>
            </NuxtLink>
            </v-card-text>
            </v-card>

            <div v-if="errClient||errServer" class="err-box flex flex-col w-1/2 m-auto mb-10 text-center mt-10 p-2 rounded-sm shadow-md">
                <div v-if="errClient">{{ errClient }}</div>
                <div v-else>{{ errServer }}</div>
            </div>
        </div>
  </div>
</template>

<script setup>
import AuthenticationService from '../services/AuthenticationService'
import { useUserStore } from '../store/UserStore'

const email=ref('')
const password=ref('')
const router=useRouter()
const errServer=ref('')
const errClient=ref('')

const userStore=useUserStore()

const login=async()=>{
    try{
       if(!email.value||!password.value){
            errClient.value='Please fill all required fields!'
       }else{
            const response = await AuthenticationService.login({
                email:email.value,
                password:password.value
            })
            userStore.setToken(response.data.token)
            userStore.setUser(response.data.user)
            router.push('/')
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
</style>