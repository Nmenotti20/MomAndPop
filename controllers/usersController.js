const db = require("../models");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
      .findOne({ where: { email: req.body.email }})
      .then(async dbModel => {
          if (!dbModel) return res.json({ message: "Email or password does not match" });

          bcrypt.compare(req.body.password, dbModel.password)
            .then((user) => {
                if (!user) return res.json({ message: "Email or password does not match" })
                console.log(process.env.jwt_secret)

                const jwtToken = jwt.sign({ uuid: dbModel.uuid, email: dbModel.email }, process.env.jwt_secret);
                res.json({ message: "Welcome!", token: jwtToken })
            })
      })
      .catch(err => res.status(422).json(err));
  },
  register: async function(req, res) {
    const existingUser = await User.findOne({ where: { email: req.body.email }});
    if (existingUser) {
        return res.json({ message: "This email already has an account" })
    } else {
        db.User
            .create(req.body)
            .then(dbModel => res.json({ message: "You registered successfully!" }))
            .catch(err => res.status(422).json(err));
    }
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
  allBusinesses: function(req, res) {
    db.Business
      .findAll({
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
            id: req.body.id,
            userId: jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret).uuid
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
          id: req.body.id,
          userId: jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret).uuid
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};