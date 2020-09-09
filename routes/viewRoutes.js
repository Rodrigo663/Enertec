const express = require('express');
const viewController =require(`../controllers/viewController`);
const authController =require(`../controllers/authController`);

const router = express.Router();


router.get('/',  viewController.getOverview);
router.get('/solar',  viewController.getSolar);

router.get('/auto',  viewController.getAuto);

router.get('/pedido',  viewController.getRequest);


router.get('/avaliacoes',  viewController.getReview);

router.get('/sobre',  viewController.getAbout);

router.get('/contato',  viewController.getContact);


router.get('/carreiras',  viewController.getCarreiras);
module.exports = router;

