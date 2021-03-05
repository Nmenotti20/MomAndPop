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

                const jwtToken = jwt.sign({ id: dbModel.id, email: dbModel.email }, process.env.jwt_secret);
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
        ...req.body,
        userId: jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret).id
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
          userId: jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret).id
        }
      })
      .then(reviews => res.json(reviews))
      .catch(err => res.status(422).json(err));
  }
//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};