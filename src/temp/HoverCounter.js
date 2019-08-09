import React, { Component } from "react"
import withCounter from './withCounter'

class HoverCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

  }


  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter)
