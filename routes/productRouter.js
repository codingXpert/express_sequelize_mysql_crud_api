const productController = require('../controllers/productController');
const reviewController = require("../controllers/reviewController");
const router = require('express').Router();

router.post('/addProduct' , productController.addProduct);
router.get('/allProduct' , productController.getAllProducts);
router.get('/published' , productController.getPublishedProduct);

router.get('/:id' , productController.getOneProduct);
router.put('/:id' , productController.updateProduct);
router.delete('/:id' , productController.deleteProduct);

router.post("/addReview", reviewController.addReview);
router.get('/getAllReviews', reviewController.getAllReviews);
router.get('/productReview/:id', productController.getProductReview);

module.exports = router;