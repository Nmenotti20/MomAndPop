const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const path = require('path');

// Defining methods for the UsersController
module.exports = {
//   findAll: function(req, res) {
//     db.User
//       .find(req.query)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  login: function(req, res) {
    db.User
      .findOne({ where: { username: req.body.username }})
      .then(async dbModel => {
          if (!dbModel) return res.json({ message: "Username or password does not match" });

          bcrypt.compare(req.body.password, dbModel.password)
            .then((user) => {
                if (!user) return res.json({ message: "Username or password does not match" })
                console.log(process.env.jwt_secret)

                const jwtToken = jwt.sign({ uuid: dbModel.uuid, username: dbModel.username }, process.env.jwt_secret);
                res.json({ message: "Welcome!", token: jwtToken, loggedInAs: 'user', name: `${dbModel.firstName} ${dbModel.lastName}`, image: dbModel.image })
            })
      })
      .catch(err => res.status(422).json(err));
  },
  register: async function(req, res) {
    const existingUser = await db.User.findOne({ where: { email: req.body.email }});
    if (existingUser) {
        return res.json({ message: "This email already has an account" })
    } else {
        db.User
            .create({
              ...req.body,
              image: req.file.filename
            })
            .then(dbModel => res.json({ message: "You registered successfully!" }))
            .catch(err => res.status(422).json(err));
    }
    // const existingUser = await User.findOne({ where: { email: req.body.email }});
    // if (existingUser) {
    //     return res.json({ message: "This email already has an account" })
    // } else {
    //     db.User
    //         .create(req.body)
    //         .then(dbModel => res.json({ message: "You registered successfully!" }))
    //         .catch(err => res.status(422).json(err));
    // }
  },
  find: async function(req, res) {
      console.log(jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret));
      res.send(jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret));
  },
  makeReview: function(req, res) {
    db.Review
      .create({
        userId: jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret).uuid,
        ...req.body
      })
      .then(result => {
        res.json(result)
      })
      .catch(err => res.status(422).json(err));
  },
  findOneUser: function(req, res) {
    db.User
    .findOne({
      where: {
        uuid: jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret).uuid
      },
      attributes: {
        exclude: [
          'password'
        ]
      },
      include: [{
        model: db.Review
      }]
    })
    .then(user => res.json(user))
    .catch(err => {
      res.status(422).json(err)
      console.log(err)
    })
  },
  findAllBusinesses: function(req, res) {
    db.Business
      .findAll({
        attributes: {
          exclude: [
            'password'
          ]
        },
        include: [{
          model: db.Review
        }]
      })
      .then(businesses => res.json(businesses))
      .catch(err => res.status(422).json(err))
  },
  findBusinesses: function(req, res) {
    db.Business
      .findAll({
        where: {
          [Sequelize.Op.or]: [
            {
              service: {
                [Sequelize.Op.substring]: req.params.query
              }
            },
            {
              companyName: {
                [Sequelize.Op.substring]: req.params.query
              }
            },
            {
              zipCode: {
                [Sequelize.Op.substring]: req.params.query
              }
            }
          ]
        },
        attributes: {
          exclude: [
            'email',
            'password'
          ]
        },
        include: [{
          model: db.Review
        }]
      })
      .then(businesses => res.json(businesses))
      .catch(err => res.status(422).json(err))
  },
  allReviews: function(req, res) {
    db.Review
      .findAll({
        where: {
          userId: jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret).uuid
        }
      })
      .then(reviews => res.json(reviews))
      .catch(err => res.status(422).json(err));
  },
  editReview: function(req, res) {
    db.Review
      .update({
        title: req.body.title,
        message: req.body.message
      },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteReview: function(req, res) {
    db.Review
      .destroy({
        where: {
          id: req.body.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  allPosts: function(req, res) {
    db.Post
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  image: function(req, res) {
    res.sendFile(path.join(__dirname, "../uploads/" + req.params.fileName))
  },
  updateUser: function(req, res) {
    console.log(req.body)
    db.User
      .update(req.body,{
        where: {
          uuid: jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret).uuid
        },
      })
      .then(user => res.json({ message: 'succes', dataChanged: req.body }))
      .catch(err => res.status(422).json(err))
  }
};