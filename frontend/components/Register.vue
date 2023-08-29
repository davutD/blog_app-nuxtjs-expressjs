<template>
        <div>
        <div class="mt-12">
            <v-card
            class="mx-auto pa-12 pb-8"
            elevation="8"
            max-width="448"
            rounded="lg"
            >
            <div class="text-subtitle-1 text-medium-emphasis">Name Surname</div>

            <v-text-field
                density="compact"
                placeholder="Name Surname"
                prepend-inner-icon="mdi-email-outline"
                variant="underlined"
                v-model="nameSurname"
                :rules="[() => !!nameSurname || 'This field is required']"
                required
            ></v-text-field>


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
            </div>
            

            <v-text-field
                :type="'password'"
                density="compact"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="underlined"
                v-model="password1"
                :rules="[() => !!password1 || 'This field is required']"
                required
            ></v-text-field>

            <div
                class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
                Password
            </div>

            <v-text-field
                :type="'password'"
                density="compact"
                placeholder="Enter your password again"
                prepend-inner-icon="mdi-lock-outline"
                variant="underlined"
                v-model="password2"
                
            ></v-text-field>

            <v-btn @click="register" block class="mb-8" color="amber" size="large" variant="tonal">
                Register
            </v-btn>

            <v-card-text class="text-center">
                <NuxtLink
                class="text-amber text-decoration-none"
                to="/login"
                >
                Login now <v-icon icon="mdi-chevron-right"></v-icon>
            </NuxtLink>
            </v-card-text>
            </v-card>
        </div>
  </div>
</template>

<script setup>
import AuthenticationService from '../services/AuthenticationService'

const nameSurname=ref('')
const email=ref('')
const password1=ref('')
const password2=ref('')
const err=ref('')
const router=useRouter()
const registerSuccess=ref(false)

const register=async()=>{
    try{
        await AuthenticationService.register({
            email:email.value,
            password:password1.value,
            name:nameSurname.value
        })
        registerSuccess.value=true
        setTimeout(()=>{
            router.push('/login')
        },2000)
    }catch(error){
        err.value=error.response.data.error
    }
}

</script>

<style lang="css">

</style>