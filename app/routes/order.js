'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // Get the order here
})

router.post('/pastries', (req, res) => {
  // Add an item to the order
})

router.delete('/pastries/:pastryName', (req, res) => {
  // Remove the item from the order
})

router.delete('/', (req, res) => {
  // Clear the order all together
})

module.exports = router
