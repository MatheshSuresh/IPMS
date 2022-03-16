var express = require('express');
var router = express.Router();

const userController = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/create', userController.create)
router.post('/update', userController.update)
router.post('/view', userController.view)
router.get('/viewall', userController.viewall)
router.delete('/destroy', userController.destroy)
router.post('/login', userController.login)

module.exports = router;
