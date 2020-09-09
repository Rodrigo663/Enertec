const express = require('express');
const userController =require(`../controllers/userController`);
const authController =require(`../controllers/authController`);

const router = express.Router();

router.get('/getMain',   userController.getMain);

router.get('/:id',   userController.getUser);
router.get('/',  userController.getUsers);

router.use(authController.checkKey);


router.post('/',   userController.addUser);

router.patch('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);


module.exports = router;
