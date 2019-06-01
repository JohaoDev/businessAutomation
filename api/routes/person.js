const knex = require('../../knex/knex')
const express = require('express');
const router = express.Router();

//GET
router.get('/', (req, res) => {
    knex.select()
        .from('persona')
        .then( persona => res.send(persona));
  })
  
  //POST
  router.post('/', (req, res) => {    
    knex('persona').insert({
      pers_nom: req.body.pers_nom
    })
    .then(() => {
      knex.select()
        .from('persona')
        .then( persona => res.send(persona));
    })
  })
  
  //PUT
  router.put('/:pers_sec', (req,res) => {
    knex('persona')
      .where('pers_sec', 
        req.params.pers_sec)
      .update({
        pers_nom: req.body.pers_nom
      })
      .then(function() {
        knex.select()
          .from('persona')
          .then( persona => res.send(persona));
      })
  })
  
  //DELETE
  router.delete('/:pers_sec', (req,res) => {
    knex('persona').where('pers_sec', req.params.pers_sec)
    .del()
    .then(function() {
      knex.select()
      .from('persona')
      .then( persona => res.send(persona));
    })
  })

module.exports = router;