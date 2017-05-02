const React = require('react')
const DefaultLayout = require('../layouts/default')

function formatPrice (priceInCents) {
  return `$${(priceInCents / 100).toFixed(2)}`
}

class PastryPage extends React.Component {
  render () {
    const { pastry, title } = this.props
    return (
      <DefaultLayout title={title} >
        <div>
          <img src={pastry.image} alt={`Picture of ${pastry.name}`} />
          <h5>{pastry.name}</h5>
          <p>{pastry.description}</p>
          <div>{formatPrice(pastry.price)}</div>
          <form method="post" action ="/orders/pastries">
            <input type="hidden" name="pastry" value={pastry} />
            <div class="button">
              <button type="submit">Add to Basket</button>
            </div>
          </form>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = PastryPage
