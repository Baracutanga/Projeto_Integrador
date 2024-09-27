const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllController);
router.post('/', userController.postController);
router.put('/:id', userController.updateController);
router.delete('/:id', userController.deleteController);

module.exports = router;