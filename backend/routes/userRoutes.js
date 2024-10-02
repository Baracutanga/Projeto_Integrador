const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',  userController.getUsers);
router.get('/', userController.getUsersById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;