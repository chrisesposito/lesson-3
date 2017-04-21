const React = require('react')

class PastryList extends React.Component {
  render () {
    const { pastries } = this.props
    return (
      <ul className='pastry-list'>
        {pastries.map(pastry => {
          return <li key={pastry.name}>
            <a href={`/pastries/${pastry.name}`}>{pastry.name}</a>
          </li>
        })}
      </ul>
    )
  }
}

module.exports = PastryList
