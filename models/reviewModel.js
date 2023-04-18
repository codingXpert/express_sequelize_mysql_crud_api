module.exports = (sequelize , DataTypes) => {
    const Review = sequelize.define('review' , {
        price: {
            type: DataTypes.INTEGER
        },
        descripton: {
            type: DataTypes.TEXT
        }
    });

    return Review;
}