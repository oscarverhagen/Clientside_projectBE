const errors = require("../errors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
require("dotenv").config();
const saltRounds = 10;

class UserController {
    login = async (req, res, next) => {
        const entity = await User.findOne({email: req.body.email});
        console.log(entity);
        if(entity == null){
            return res.status(204).send();
        }
        //comparing passwords
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            entity.password
        );
        // checking if password was valid and send response accordingly
        if (!passwordIsValid) {
            return res.status(401)
            .send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        //signing token with user id
        var token = jwt.sign({id: entity.id}, process.env.TOKEN_KEY, { expiresIn: "2h" })
        
        //responding to client request with user profile success message and  access token .
        res.status(200).json({
            message:'Success',
            token:token,
            user:entity
        })
    }



    register = async (req, res, next) => {
        const user = new User({
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, saltRounds),
            email: req.body.email,
            //birthdate : req.body.dateOfBirth,
        }) 

        user.save((err, result) => {
            if (result) {
                return res.status(201).json({
                    result: result
                })
              }
            if (err) {
                console.log(err)
                return res.status(400).json({
                    //message: "Failed getting connection!",
                    error: err,
                  });
              }
        });
    }

}

module.exports = UserController