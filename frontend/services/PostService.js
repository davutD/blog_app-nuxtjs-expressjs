import Api from './Api'

export default{
    index(){
        return Api().get('posts')
    },
    getPost(postId){
        return Api().get(`posts/${postId}`)
    },
    create(inputs){
        return Api().post('posts',inputs)
    }
}