module.exports = (sequelize , DataTypes) => {
    const Review = sequelize.define('review' , {
        rating: {
            type: DataTypes.INTEGER
        },
        descripton: {
            type: DataTypes.TEXT
        }
    });

    return Review;
}