const AuthenticationController=require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy')
const PostsController=require('./controllers/PostsController')


module.exports=(app)=>{
    app.post('/register',  
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
        
    app.post('/login', 
    AuthenticationController.login)

    app.get('/posts', 
    PostsController.index)

    app.get('/posts/:postId',
    PostsController.getPost)

    app.post('/posts', 
    PostsController.create)
    
}