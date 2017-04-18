const React = require('react')
const DefaultLayout = require('../layouts/default')

class PastriesPage extends React.Component {
  render () {
    const { pastries } = this.props
    return (
      <DefaultLayout title={this.props.title} >
        <div>
          {pastries.map(pastry => {
            return <div>{pastry.name}</div>
          })}
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = PastriesPage
