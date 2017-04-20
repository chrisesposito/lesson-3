'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
})

router.get('/:name', (req, res) => {
  const { name } = req.params

  const getPastry = Pastry.find(name)

  return getPastry.then(pastry => {
    return res.status(200).render('pastry/show', {
      title: `Pauline's Perfect Patisserie`,
      pastry
    })
  })
})

router.post('/', (req, res) => {
})

router.put('/:name', (req, res) => {
})

router.delete('/:name', (req, res) => {
})

module.exports = router
