const db = require('../models');
const Review = db.reviews;


//1.Add review
const addReview = async(req , res) => {
          let data = {
                    rating: req.body.rating,
                    description: req.body.description,
                    product_id: req.body.product_id
          } 
          const review = await Review.create(data);
          res.status(200).send(review);
}

//2.Get All Reviews
const getAllReviews = async(req , res) => {
          const reviews = await Review.findAll({});
          res.status(200).send(reviews);
}

module.exports = {
          addReview,
          getAllReviews
}