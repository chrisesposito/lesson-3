'use strict'

const express = require('express')
const router = express.Router()

const Pastry = require('../models/pastry')
const Order = require('../models/order')

// this is the current method for getting and then invoking the
// rendering of the entire order - http://localhost:3000/orders
// it currently complains about missing keys for list items
router.get('/', (req, res) => {
    // Get the order here
    const getOrder = Order.getOrder();
    return getOrder.then(order => {			     
	return res.status(200).render('order/index', {
	    title: `Your Basket`,
	    pastries: order.pastries,
	    totalPrice: order.totalPrice
	})
    })
})

// this method appears to work, as I get a 201 status code
// the idea was to then show the current order / basket,
// but it blows up when it tries to render the page
router.post('/pastries', (req, res) => {
    // Add an item to the order
    const {pastry} = req.body
    const addedToOrder = Order.addPastry(pastry);
    return addedToOrder.then(result => {	
	return res.status(201).render('order/index', {
	    title: `Your Basket`,
	    pastries: result.pastries,
	    totalPrice: result.totalPrice
	})
    })
})

router.delete('/pastries/:pastryName', (req, res) => {
  // Remove the item from the order
})

router.delete('/', (req, res) => {
  // Clear the order all together
})

module.exports = router
