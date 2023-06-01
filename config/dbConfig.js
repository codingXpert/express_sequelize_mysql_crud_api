require('dotenv').config();
module.exports = {       // module.export because we need to to use these file in another file 
    HOST:'localhost',
    USER:'root',
    PASSWORD:process.env.PASSWORD,
    DB:'sequelize',
    dialect:'mysql',
    pool:{
        max:5,  //max connection should be 5 & min should be 0
        min:0,
        acquire:30000,
        idel:10000
    }  
}