const React = require('react')
const DefaultLayout = require('../layouts/default')
const PastryList = require('../components/pastry-list')

class PastriesPage extends React.Component {
  render () {
    const { pastries, title } = this.props
    return (
      <DefaultLayout title={title} >
        <PastryList pastries={pastries} />
      </DefaultLayout>
    )
  }
}

module.exports = PastriesPage
