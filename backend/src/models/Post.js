const bcrypt=require('bcrypt')
const { DataTypes,Sequelize } = require("sequelize")
const sequelize = new Sequelize('sqlite::memory:')

module.exports=(sequelize,DataTypes)=>{
    const Post = sequelize.define('Post',{
       title:DataTypes.TEXT,
       author_name:DataTypes.STRING,
       author_profile_url:DataTypes.TEXT,
       tag:DataTypes.STRING,
       image_url:DataTypes.TEXT,
       content:DataTypes.TEXT
    })

    return Post
}