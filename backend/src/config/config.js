module.exports={
    port: process.env.PORT || 3030,
    db:{
        database: process.env.DB_NAME || 'blog',
        user: process.env.DB_USER || 'blog',
        password: process.env.DB_PASS || 'blog',
        options:{
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './blog.sqlite'
        }
    }
}