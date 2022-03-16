var express = require('express');
var router = express.Router();

const bookingController = require('../controllers/booking.controller')

/* GET table listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', bookingController.create)
router.post('/update', bookingController.update)
router.post('/view', bookingController.view)
router.get('/viewall', bookingController.viewall)
router.post('/destroy', bookingController.destroy)

module.exports = router;
