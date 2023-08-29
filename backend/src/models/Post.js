const { DataTypes,Sequelize } = require("sequelize")
const sequelize = new Sequelize('sqlite::memory:')

module.exports=(sequelize,DataTypes)=>{
    const Post = sequelize.define('Post',{
       title:DataTypes.STRING,
       description:DataTypes.STRING,
       author_name:DataTypes.STRING,
       author_profile_url:DataTypes.STRING,
       tag:DataTypes.STRING,
       image_url:DataTypes.STRING,
       content:DataTypes.TEXT
    })

    return Post
}