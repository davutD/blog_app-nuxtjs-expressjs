const bcrypt=require('bcrypt')
const { DataTypes,Sequelize } = require("sequelize")
const sequelize = new Sequelize('sqlite::memory:')

const hashPassword = async (user)=>{
    const SALT_FACTOR=10

    if(!user.changed('password')){
        return
    }

    return await bcrypt.hash(user.password,SALT_FACTOR)
        .then((hash)=>{
            user.setDataValue('password',hash)
        })
}

module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
        name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        password:{
            type:DataTypes.STRING
        }
    },{
        hooks:{
            beforeSave:hashPassword
        }
    })

    User.prototype.comparePassword= function(password){
        return bcrypt.compare(password, this.password)
    }

    return User
}