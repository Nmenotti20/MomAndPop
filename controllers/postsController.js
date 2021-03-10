const db = require("../models");
const Review = require("../models/review");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.Review
      .findAll({})
      .then(review => res.json(review))
      .catch(err => res.status(422).json(err));
  },
//   login: function(req, res) {
//     db.Business
//       .findOne({ where: { email: req.body.email }})
//       .then(async dbModel => {
//           if (!dbModel) return res.json({ message: "Email or password does not match" });

//           bcrypt.compare(req.body.password, dbModel.password)
//             .then((user) => {
//                 if (!user) return res.json({ message: "Email or password does not match" })
//                 console.log(process.env.jwt_secret)

//                 const jwtToken = jwt.sign({ id: dbModel.id, email: dbModel.email }, process.env.jwt_secret);
//                 res.json({ message: "Welcome!", token: jwtToken })
//             })
//       })
//       .catch(err => res.status(422).json(err));
//   },
//   register: async function(req, res) {
//     const existingUser = await Business.findOne({ where: { email: req.body.email }});
//     if (existingUser) {
//         return res.json({ message: "This email already has an account" })
//     } else {
//         db.Business
//             .create(req.body)
//             .then(dbModel => res.json({ message: "You registered successfully!" }))
//             .catch(err => res.status(422).json(err));
//     }
//   },
//   find: async function(req, res) {
//       console.log(jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret));
//       res.send(jwt.verify(req.headers.authorization.split(" ")[1], process.env.jwt_secret));
//   }
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