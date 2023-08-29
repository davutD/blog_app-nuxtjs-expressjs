import Api from './Api'

export default{
    index(){
        return Api().get('posts')
    },
    create(inputs){
        return Api().post('posts',inputs)
    }
}