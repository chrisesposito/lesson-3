'use strict'

const express = require('express')
const router = express.Router()

const Pastry = require('../models/pastry')
const Order = require('../models/order')
const methodOverride = require('method-override')
router.use(methodOverride('_method'))

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


router.post('/pastries', (req, res) => {
    // Add an item to the order
    const {name} = req.body
    const getPastry = Pastry.find(name)
    return getPastry.then(pastry => {
        return Order.addPastry(pastry).then(pastry => {
            res.redirect('/orders');

        })
    })
})

router.delete('/pastries/:pastryName', (req, res) => {
    // Remove the item from the order
    const {pastryName} = req.params
    const removeItem = Order.removePastry(pastryName)

    return removeItem.then(pastries => {
        return Order.getOrder().then(pastries => {
            res.status(200).redirect('../../order')
        })
    })
})

router.delete('/', (req, res) => {
    // Clear the order all together
    const removeAll = Order.removeAll()
    return removeAll.then(orders => {
        res.status(200).redirect('../../order')
    })
})


module.exports = router
