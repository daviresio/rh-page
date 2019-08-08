import React, { Component, createRef } from "react"

class CircleCanvas extends Component {

  constructor(props) {
    super(props)

    this.state = {
      initialValue: 4.72
    }

    this.canvas = createRef(null)
  }

  componentDidUpdate() {
    this.height = this.canvas.current.height
    this.width = this.canvas.current.width
    this.ctx = this.canvas.current.getContext("2d")
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.beginPath()
    this.ctx.strokeStyle = 'rgba(255, 255, 255, .8)'
    this.ctx.lineWidth = 2
    this.ctx.arc(this.width / 2, this.height / 2, 50, this.state.initialValue, this.props.value, false)
    this.ctx.stroke()
  }

  render() {
    return (
      <canvas ref={this.canvas} width={120} height={120}/>
    )
  }
}

export default CircleCanvas
