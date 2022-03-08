var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	'name' : String,
	'phonenumber' : Number,
	'genderid' : Number,
	'photo' : String,
	'email' : String,
	'dob' : String,
	'age' : Number,
	'bloodgroup' : Number,
	'speciality' : Number,
	'roleid' : Number,
	'rolename' : String,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'userid' : String,
	'clinicid' : Number,
	'status' : String
});

module.exports = mongoose.model('User', UserSchema);
