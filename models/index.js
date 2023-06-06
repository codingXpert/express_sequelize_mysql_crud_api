const dbConfig = require('../config/dbConfig');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)

//authenticating the DB connection
sequelize.authenticate()
.then(() =>{
    console.log('connected...');
})
.catch(err => {
    console.log('Error while connecting to DB' , err);
});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel.js')(sequelize , DataTypes);
db.reviews = require('./reviewModel.js')(sequelize , DataTypes);        //here products and reviews are the table names

db.sequelize.sync({force: false}) 
.then(() => {
    console.log('yes re-sync done!');
});

//one to many relation
db.products.hasMany(db.reviews , {
    foreignKey: 'product_id',
    as: 'review'
})
db.reviews.belongsTo(db.products , {
    foreignKey: 'product_id',
    as: 'product'
})

module.exports = db; 