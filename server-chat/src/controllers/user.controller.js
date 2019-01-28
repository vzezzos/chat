/*
**  Différents controllers mis en place pour 
**  Add user, get all User, Get one User, Rm one user, Change data User
*/

const ObjetID =   require("mongoose").Types.ObjectId;
const bcrypt = require('bcrypt');
const auth = require('../lib/auth');
const User = require('../models/user').User;

const saltRounds = 10;


module.exports.create = (req, res, db) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    if (err) {
      res.status(400).send({ error: "Cannot encrypt password" });
      return ;
    }
    const user = {
      username: req.body.username,
      password: hash,
      email: req.body.email
    };
    User.create(user, (err, result) => {
      if (err) {
        console.log("can't create user: ", user, err);
        res.status(400).send({ error: "Cannot create user" });
      } else {
        User.find({ _id: result._id}).exec((err, resultExec) => {
          if (err) {
            res.send({ error: "An error has occurred" });
          } else {
            console.log(resultExec[0]);
            res.json(resultExec[0]);
          }
        });
      }
    });
  });
};

/*
module.exports.create = (req, res, db) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    if (err) {
      res.send({ error: "An error has occurred" });
      return ;
    }
    const user = {
      username: req.body.username,
      password: hash,
      admin: false
    };
    db.collection("users").insert(user, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
*/

module.exports.authentify = (req, res, db) => {
  console.log(req.body.username, req.body.password);
  User
  .find({username: req.body.username})
  .select("+password")
  .exec((err, result) => {
    console.log(result);
    if (err || result[0] === undefined) {
      res.send({ error: "An error has occurred dans le username" });
    } else {
      bcrypt.compare(req.body.password, result[0].password, function(err, match) {
        if (err)
        {
          res.send({ error: "An error has occured with bcrypt"});
          return;
        }
        if (match)
        {
          console.log("tout s'est bien passé dans le hash du password", result[0]);
          res.json({user: result[0], token: auth.createJWToken(result[0])});
        } else {
          res.send({ error: "password incorrect" });
        }
      });
    }
  });
};

module.exports.getAll = (req, res, db) => {
  User
    .find()
    .exec((err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        console.log(result);
        res.json(result);
      }
    });
};

module.exports.getById = (req, res, db) => {
    User
    .find({_id: new ObjetID(req.params.id)})
    .exec((err, result) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          console.log(result[0]);
          res.json(result[0]);
        }
    });
};

module.exports.delete = (req, res, db) => {
    User
    .remove({_id: new ObjetID(req.params.id)}, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.json(result);
      }
    });
};

module.exports.update = (req, res, db) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      const user = {
        username: req.body.username,
        password: hash,
      };
      User.update({_id: new ObjetID(req.params.id)}, user)
      .exec((err, result) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(result);
        }
      });
    });
};