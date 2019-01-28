/*
**  Routes mises en paces pour appeler les controlleurs
**  C'est ici que les middlewares pourront etre appelés
*/

const userController = require('../controllers/user.controller');
const authMDW = require('../middlewares/authMDW');

module.exports = function(app, db) {
  app.post("/users", (req, res) => userController.create(req, res, db));

  app.post("/users/login", (req, res) => userController.authentify(req, res, db))

  app.get("/users", (req, res) => userController.getAll(req, res, db));
  
  app.get("/users/:id", (req, res) => userController.getById(req, res, db));

  app.delete("/users/:id", authMDW.isAuthentifiedBody, (req, res) => userController.delete(req, res, db));

  app.put("/users/:id", (req, res) => userController.update(req, res, db));

};
