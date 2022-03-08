var UserModel = require('../models/UserModel.js');

/**
 * UserController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {

    /**
     * UserController.list()
     */
    list: function (req, res) {
        UserModel.find(function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            return res.json(Users);
        });
    },

    /**
     * UserController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        UserModel.findOne({_id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            return res.json(User);
        });
    },

    /**
     * UserController.create()
     */
    create: function (req, res) {
        var User = new UserModel({
			name : req.body.name,
			phonenumber : req.body.phonenumber,
			genderid : req.body.genderid,
			photo : req.body.photo,
			email : req.body.email,
			dob : req.body.dob,
			age : req.body.age,
			bloodgroup : req.body.bloodgroup,
			speciality : req.body.speciality,
			roleid : req.body.roleid,
			rolename : req.body.rolename,
			createdby : req.body.createdby,
			modifiedby : req.body.modifiedby,
			modifiedat : req.body.modifiedat,
			userid : req.body.userid,
			clinicid : req.body.clinicid,
			status : req.body.status
        });

        User.save(function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating User',
                    error: err
                });
            }

            return res.status(201).json(User);
        });
    },

    /**
     * UserController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        UserModel.findOne({_id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            User.name = req.body.name ? req.body.name : User.name;
			User.phonenumber = req.body.phonenumber ? req.body.phonenumber : User.phonenumber;
			User.genderid = req.body.genderid ? req.body.genderid : User.genderid;
			User.photo = req.body.photo ? req.body.photo : User.photo;
			User.email = req.body.email ? req.body.email : User.email;
			User.dob = req.body.dob ? req.body.dob : User.dob;
			User.age = req.body.age ? req.body.age : User.age;
			User.bloodgroup = req.body.bloodgroup ? req.body.bloodgroup : User.bloodgroup;
			User.speciality = req.body.speciality ? req.body.speciality : User.speciality;
			User.roleid = req.body.roleid ? req.body.roleid : User.roleid;
			User.rolename = req.body.rolename ? req.body.rolename : User.rolename;
			User.createdby = req.body.createdby ? req.body.createdby : User.createdby;
			User.modifiedby = req.body.modifiedby ? req.body.modifiedby : User.modifiedby;
			User.modifiedat = req.body.modifiedat ? req.body.modifiedat : User.modifiedat;
			User.userid = req.body.userid ? req.body.userid : User.userid;
			User.clinicid = req.body.clinicid ? req.body.clinicid : User.clinicid;
			User.status = req.body.status ? req.body.status : User.status;
			
            User.save(function (err, User) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating User.',
                        error: err
                    });
                }

                return res.json(User);
            });
        });
    },

    /**
     * UserController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        UserModel.findByIdAndRemove(id, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the User.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
