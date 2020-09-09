const express = require('express');
const requestController =require(`../controllers/requestController`);
const authController =require(`../controllers/authController`);
const router = express.Router();


router.get('/',  authController.checkKey, requestController.getRequests);

router.get('/:id', authController.checkKey,   requestController.getRequest);


router.post('/' , requestController.addRequest);
router.patch('/:id', authController.checkKey, requestController.updateRequest);

router.delete('/:id', authController.checkKey, requestController.deleteRequest);


module.exports = router;
