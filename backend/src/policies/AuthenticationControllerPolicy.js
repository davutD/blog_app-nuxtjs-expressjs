const Joi = require('joi')

module.exports={
    register(req,res,next){
        const schema=Joi.object({
            name:Joi.string().required(),
            email:Joi.string().email().required(),
            password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')).required()
        })

        const {error,value}= schema.validate(req.body)

        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error:'You must provide a valid email address!'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error:`The password provided failed to match the fallowing rules:

                        1. It must contain ONLY the fallowing characters: lower case, upper case, numeric characters.
                        
                        2. It must be at least 8 characters in length and greater than 32 characters in length.
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error:'Invalid registration information.'
                    })
            }
        }else{
            next()
        }
    }
}