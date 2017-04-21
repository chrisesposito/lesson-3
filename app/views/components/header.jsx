const React = require('react')

class Header extends React.Component {
  render () {
    const { title } = this.props
    const words = title.split(' ')
    const firstWord = words.shift()
    return (
      <header>
        <h1>
          <span className='car-word'>{firstWord} </span>
          <span className='cdr-word'>{words.join(' ')}</span>
        </h1>
      </header>
    )
  }
}

module.exports = Header
