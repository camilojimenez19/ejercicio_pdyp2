const { Router } = require('express');
const UserController = require('../controllers/user')

const router = new Router();

router.get('/', UserController.userGet)
router.post('/', UserController.userPost)
router.put('/:id', UserController.userPut)
router.patch('/', UserController.userPatch)
router.delete('/', UserController.userDelete)

module.exports = router;
