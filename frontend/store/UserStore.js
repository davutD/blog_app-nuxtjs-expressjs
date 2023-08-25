import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
    state:()=>{
      return{
        token:null,
        user:null,
        isUserLoggedIn:false
      }
    },
    getters:{

    },
    actions:{
      setToken(token){
        this.token=token
        if(token){
          this.isUserLoggedIn=true
        }else{
          this.isUserLoggedIn=false
        }
      },
      setUser(user){
        this.user=user
      }
    }

  })

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useUserStore,import.meta.hot))
}