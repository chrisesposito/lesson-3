const React = require('react')
const DefaultLayout = require('../layouts/default')

function formatPrice(priceInCents)
{
    return `$${(priceInCents / 100).toFixed(2)}`
}

class OrderPage extends React.Component
{
    render()
    {
        const {pastries, title} = this.props

        const pastryItems = pastries.map((pastry) => {
            <li key={pastry.name}>
                {pastry.name}
            </li>
        })

        return (
                <DefaultLayout title={title} >
                    {pastries.map(pastry => {
                                    return (
                                                <ul>
                                                    <li key={pastry.name}>{pastry.name}, Item Price: {formatPrice(pastry.price)}, Quantity: {pastry.quantity}</li>
                                                    <li>{pastry.name} Total: {formatPrice(pastry.totalPrice)}</li>
                                                    <form method="POST" action={`/order/pastries/${pastry.name}?_method=DELETE`}>
                                                        <li><button>Remove</button></li>
                                                    </form>
                                                </ul>
                                            )
                                })
                    }
                    <div>Total: {formatPrice(pastries.totalPrice)}</div>
                    <form method="POST" action={`/order/?_method=DELETE`}>
                        <button>Remove All</button>
                    </form>



                </DefaultLayout>
                )
    }
}

module.exports = OrderPage
