import React, { Component, createRef } from "react"

class CircleCanvas extends Component {

  constructor(props) {
    super(props)

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <canvas ref={this.canvas} width={this.container.current.offsetWidth} height={this.container.current.offsetHeight}/>
    )
  }
}

export default CircleCanvas
