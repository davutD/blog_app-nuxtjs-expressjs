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
                prepend-inner-icon="mdi-account-circle"
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
                :rules="[() => !!password2 || 'This field is required']"
                required
            ></v-text-field>

            <v-btn @click="register" block class="mb-8" color="amber" size="large" variant="tonal"
            :rules="[() => !!password1 || 'This field is required']"
            >
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
            <div v-if="errClient||errServer" class="err-box flex flex-col w-1/2 m-auto mb-10 text-center mt-10 p-2 rounded-sm shadow-md">
                <div v-if="errClient">{{ errClient }}</div>
                <div v-else>{{ errServer }}</div>
            </div>
            <div v-if="isRegistered" class="success-box flex flex-col w-1/2 m-auto mb-10 text-center mt-10 p-2 rounded-sm shadow-md">You are successfuly registered. Now, redirecting to the login page!</div>
        </div>
  </div>
</template>

<script setup>
import AuthenticationService from '../services/AuthenticationService'

const nameSurname=ref('')
const email=ref('')
const password1=ref('')
const password2=ref('')
const errServer=ref('')
const errClient=ref('')
const isRegistered=ref(false)
const router=useRouter()
const registerSuccess=ref(false)

const register=async()=>{
    try{
        if(!nameSurname.value||!email.value||!password1.value||!password2.value){  
            errClient.value="Please fill all required fields!"
            console.log(errClient.value)
        }else if(password1.value!==password2.value){
            errClient.value="Passwords do not match!"
        }else{
            await AuthenticationService.register({
            email:email.value,
            password:password1.value,
            name:nameSurname.value
            })
            registerSuccess.value=true
            setTimeout(()=>{
                router.push('/login')
            },2000)

            errClient.value=null
            errServer.value=null
            isRegistered.value=true
        }
    }catch(error){
        errClient.value=null
        errServer.value=error.response.data.error
    }
}

</script>

<style lang="css">
.v-text-field .v-field--no-label input{
    padding: 0.6rem 0.6rem;
}
.err-box{
    background-color: #fff7e1;
    color: #ffc107;
}
.success-box{
    background-color: #4caf50;
    color: white;
}
</style>