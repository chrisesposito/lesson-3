'use strict'

const orderData = require('../database/order')

class Order
{
    static addPastry(pastry)
    {
        const {pastries} = orderData
        const exists = Object.keys(pastries).some(p => p === pastry.name)

        if (exists)
        {
            orderData.pastries[pastry.name].quantity++
            orderData.pastries[pastry.name].totalPrice = orderData.pastries[pastry.name].price * orderData.pastries[pastry.name].quantity
        }
        else
        {
            orderData.pastries[pastry.name] = Object.assign({}, pastry, {quantity: 1}, {totalPrice: pastry.price})
        }

        return Promise.resolve(orderData.pastries[pastry.name])
    }

    static removePastry(pastryName)
    {
        const exists = Object.keys(orderData.pastries).some(p => p === pastryName)

        if (exists)
        {
            orderData.pastries[pastryName].quantity--
            orderData.pastries[pastryName].totalPrice = orderData.pastries[pastryName].price * orderData.pastries[pastryName].quantity

            if (orderData.pastries[pastryName].quantity === 0)
            {
                delete orderData.pastries[pastryName]
            }
        }

        return Promise.resolve(orderData.pastries[pastryName])
    }

    static getOrder()
    {
        const {pastries} = orderData
        const objects = Object.keys(pastries).map(pk => pastries[pk])

        const totalPrice = objects.reduce((acc, pastry) => {
            return acc + pastry.totalPrice
        }, 0)

        return Promise.resolve({
            pastries: objects,
            totalPrice
        })
    }

    static removeAll()
    {
        orderData.pastries = {}
        orderData.totalPrice = 0
        const {pastries, totalPrice} = orderData

        return Promise.resolve({
            pastries,
            totalPrice
        })

    }
}

module.exports = Order
