'use strict'

const express = require('express')
const router = express.Router()

const Pastry = require('../models/pastry')
const Order = require('../models/order')
//const methodOverride = require('method-override')
//router.use(methodOverride('_method'))

router.get('/', (req, res) => {
    // Get the order here
    console.log("get order")
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
    console.log(" add pastry - name = " + name)
    const getPastry = Pastry.find(name)
    return getPastry.then(pastry => {
        return Order.addPastry(pastry).then(pastry => {
            res.redirect('/orders');
        })
    })
})

router.post('/pastries/:name', (req, res) => {
    // Remove the item from the order
    const {name} = req.body
    console.log("delete pastry by name =" + name)
    const removeItem = Order.removePastry(name)

    return removeItem.then(pastries => {
        return Order.getOrder().then(pastries => {
            res.redirect('/orders')
        })
    })
})
router.post('/', (req, res) => {//- delete all from order

    console.log("delete all from order")
    const removeall = Order.removeAll()
    return removeall.then(emptyorder => {
        res.redirect('/orders')
    })
})

router.delete('/', (req, res) => {
    // Clear the order all together
    const removeAll = Order.removeAll()
    return removeAll.then(orders => {
        res.redirect('/orders')
    })
})


module.exports = router
