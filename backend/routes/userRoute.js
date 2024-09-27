const express = require('express');
const User = express.Router();
const user = require('../controllers/user');

router.get('/', user.getAllController);
router.post('/', user.createController);
router.put('/:id', user.updateController);
router.delete('/:id', user.deleteController);

module.exports = router;