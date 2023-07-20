const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

// router.route('/user')
//      .get(UserController.index)
//      .post(UserController.store);

router.get('/user', UserController.index);
router.get('/user/create', UserController.create);
router.post('/user/store', UserController.store);
router.get('/user/:id', UserController.show);

router.put('/user/:id', UserController.update);

router.delete('/user/:userId', UserController.delete);

module.exports = router;