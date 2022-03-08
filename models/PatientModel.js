var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PatientSchema = new Schema({
	'firstname' : String,
	'middlename' : String,
	'lastname' : String,
	'phonenumber' : Number,
	'secondarynumber' : Number,
	'genderid' : Number,
	'address' : String,
	'area' : String,
	'photo' : String,
	'email' : String,
	'dob' : String,
	'bloodgroup' : Number,
	'caseid' : String,
	'patientgroupid' : Number,
	'medicalhistoryids' : Array,
	'otherhistory' : String,
	'occupation' : String,
	'skypeid' : String,
	'idcardtype' : Number,
	'idcardnumber' : String,
	'notifychannelid' : Array,
	'languageid' : Number,
	'referralid' : Number,
	'referraldescription' : String,
	'referredbyid' : Number,
	'createdat' : Date,
	'createdby' : Number,
	'modifiedby' : Number,
	'modifiedat' : Date,
	'id' : String,
	'status' : String
});

module.exports = mongoose.model('Patient', PatientSchema);
