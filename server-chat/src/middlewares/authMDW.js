/*
**  fichier de mises en places des middlewares 
**  (fonctions étant appeler AVANT les controlleurs pour vérifier que la reqêtes est correcte)
**  
*/

const auth = require('../lib/auth');

module.exports.isAuthentifiedBody = function isAuthentifiedBody(req, res, next) {
    if (!req.headers.authorization) {
      res.status(401).send({error : "Requête non signé"});
      return ;
    }
    const token =  req.headers.authorization.split(' ')[1];
    console.log(token);
    auth.verifyJWTToken(token).then((user) => {
      if (!user) {
        res.status(401).send({error: "Signature non valide"});
        return ;
      } else if (user.data._id !== req.params.id) {
        console.log(user.data, req.params.id);
        res.status(403).send({error: "Cannot delete another user"});
        return ;
      }
      next();
    });
  //fonction qui va regarder si le token est donné dans la requetes autrement send error  
};

module.exports.isAuthentified = function isAuthentified(req, res, next) {
  if (!req.body.token) {
    res.status(401).send({error : "Requête non signé"});
    return ;
  }
  auth.verifyJWTToken(req.body.token).then((user) => {
    if (!user) {
      res.send({error: "Signature non valide"});
      return ;
    } else if (user.data._id !== req.params.id) {
      console.log(user.data, req.params.id);
      res.send({error: "Cannot delete another user"});
      return ;
    }
    next();
  });
//fonction qui va regarder si le token est donné dans la requetes autrement send error  
};