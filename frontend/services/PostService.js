import Api from './Api'

export default{
    index(){
        return Api().get('posts')
    },
    create(){
        return Api().post('posts')
    }
}