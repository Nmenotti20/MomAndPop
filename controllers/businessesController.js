const db = require("../models");
const Business = require("../models/business");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

// Defining methods for the UsersController
module.exports = {
  //   findAll: function(req, res) {
  //     db.User
  //       .find(req.query)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  login: function (req, res) {
    db.Business.findOne({ where: { email: req.body.email } })
      .then(async (dbModel) => {
        if (!dbModel)
          return res.json({ message: "Email or password does not match" });

        bcrypt.compare(req.body.password, dbModel.password).then((user) => {
          if (!user)
            return res.json({ message: "Email or password does not match" });
          console.log(process.env.jwt_secret);

          const jwtToken = jwt.sign(
            { uuid: dbModel.uuid, email: dbModel.email },
            process.env.jwt_secret
          );
          res.json({
            message: "Welcome!",
            token: jwtToken,
            loggedInAs: "business",
            name: dbModel.companyName,
            image: dbModel.image,
          });
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  register: async function (req, res) {
    const existingUser = await Business.findOne({
      where: { email: req.body.email },
    });
    if (existingUser) {
      return res.json({ message: "This email already has an account" });
    } else {
      db.Business.create({
        ...req.body,
        image: req.file.filename,
      })
        .then((dbModel) =>
          res.json({ message: "You registered successfully!" })
        )
        .catch((err) => res.status(422).json(err));
    }
  },
  find: async function (req, res) {
    db.Business.findOne({
      where: {
        uuid: jwt.verify(
          req.headers.authorization.split(" ")[1],
          process.env.jwt_secret
        ).uuid,
      },
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: db.Review,
        },
      ],
    })
      .then((business) => res.json(business))
      .catch((err) => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  allReviews: function (req, res) {
    db.Review.findAll({
      where: {
        businessId: jwt.verify(
          req.headers.authorization.split(" ")[1],
          process.env.jwt_secret
        ).uuid,
      },
    })
      .then((reviews) => res.json(reviews))
      .catch((err) => res.status(422).json(err));
  },
  makePost: function (req, res) {
    db.Post.create({
      businessId: jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.jwt_secret
      ).uuid,
      ...req.body,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(422).json(err));
  },
  allPosts: function (req, res) {
    db.Post.findAll({
      where: {
        businessId: jwt.verify(
          req.headers.authorization.split(" ")[1],
          process.env.jwt_secret
        ).uuid,
      },
    })
      .then((reviews) => res.json(reviews))
      .catch((err) => res.status(422).json(err));
  },
  editPost: function (req, res) {
    db.Post.update(
      {
        title: req.body.title,
        message: req.body.message,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  deletePost: function (req, res) {
    db.Post.destroy({
      where: {
        id: req.body.id,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateBiz: function (req, res) {
    db.Business.update(req.body, {
      where: {
        uuid: jwt.verify(
          req.headers.authorization.split(" ")[1],process.env.jwt_secret
        ).uuid,
      },
    })
      .then((user) => res.json({ message: "Success", dataChanged: req.body }))
      .catch((err) => res.status(422).json(err));
  },
};