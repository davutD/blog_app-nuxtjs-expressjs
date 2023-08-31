const {Post}=require('../models')

module.exports={
    async index(req,res){
        try{
            const posts= await Post.findAll({
                limit:10
            })
            res.send(posts)
        }catch(err){
            res.status(500).send({
                error:'An error has occured trying to fetch the posts.'
            })
        }
    },
    async create(req,res){
        try{
            const post= await Post.create(req.body)
            res.send(post.toJSON())
        }catch(err){
            res.status(500).send({
                error:'An error has occured trying to create the post.'
            })
        }
    },
    async getPost(req,res){
        try{
            const post = await Post.findOne({
                where:{
                    id:req.params.postId
                }
            })
            res.send(post)
        }catch(err){
            res.status(500).send({
                error:'An error has occured trying to get the post.'
            })
        }
    }
}