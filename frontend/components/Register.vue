<template>
    <div>
            <v-card
        class="mx-auto text-center mt-10"
        max-width="344"
        title="Registration Page"
    >
        <v-container>
        <v-text-field disabled
            v-model="first"
            color="primary"
            label="First name"
            variant="underlined"
        ></v-text-field>

        <v-text-field disabled
            v-model="last"
            color="primary"
            label="Last name"
            variant="underlined"
        ></v-text-field>

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

        <v-text-field
            type="password"
            v-model="password2"
            color="primary"
            label="Password"
            placeholder="Repeat your password"
            variant="underlined"
        ></v-text-field>

        <v-checkbox disabled
            v-model="terms"
            color="secondary"
            label="I agree to site terms and conditions"
        ></v-checkbox>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn @click="register" class="w-full" color="success">
                Register
            <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
        </v-card-actions>
        </v-card>
        <v-alert class="mt-10 w-1/3 m-auto" density="compact" v-if="err" :text="err" type="warning" variant="tonal"></v-alert>
        <v-alert class="mt-10 w-1/3 m-auto" density="compact" v-if="registerSuccess" text="You successfuly registered!" type="success" variant="tonal"></v-alert>
        
    </div>
</template>

<script setup>
import AuthenticationService from '../services/AuthenticationService'

const email=ref('')
const password1=ref('')
const err=ref('')
const router=useRouter()
const registerSuccess=ref(false)

const register=async()=>{
    try{
        await AuthenticationService.register({
            email:email.value,
            password:password1.value
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