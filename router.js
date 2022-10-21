const express = require('express');
const router = express.Router();

const Cliente = require('./models/pessoa');

router.post('/novo', (req, res) => {
  const novoCliente = new Cliente({
    nome: req.body.nome,
    sobreNome: req.body.sobreNome
  });

  novoCliente.save().then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.get('/todos', (req, res) => {
    Cliente.find()
      .then(clientes => {
        res.json(clientes);
      })
      .catch(error => res.status(500).json(error));
  });

module.exports = router;