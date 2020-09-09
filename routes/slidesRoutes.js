const express = require('express');
const slideController =require(`../controllers/slideController`);
const authController =require(`../controllers/authController`);

const router = express.Router();


router.get('/',  slideController.getSlides);
router.get('/:id',  slideController.getSlide);
router.patch('/:id', authController.checkKey,  slideController.updateSlide);
router.delete('/:id', authController.checkKey,  slideController.deleteSlide);

router.post('/', authController.checkKey,  slideController.addSlide);


module.exports = router;