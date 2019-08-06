import React, { Component, createRef } from "react"

class ItemMenu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      acumulateValue: 4.72,
      initialValue: 4.72,
    }

    this.container = createRef(null)
    this.canvas = createRef(null)
  }

  componentWillMount() {
    this.updateState({ checked: this.props.checked })

  }

  componentDidMount() {
    this.getCanvas = this.container.current ? <canvas ref={this.canvas} width={this.container.current.offsetWidth}
                                                      height={this.container.current.offsetHeight}/> : null
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.updateState({ checked: nextProps.checked }, () => {
      this.animationFrame = requestAnimationFrame(this.drawCircle)
    })

  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame)
  }

  updateState = (props) => {
    this.setState({ ...props })
    this.intervalo = setInterval(this.drawCircle, 600)
  }

  drawCircle = () => {
    if (this.canvas.current === null) return
    this.ctx = this.canvas.current.getContext("2d")
    this.ctx.beginPath()
    this.ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height)
    this.ctx.strokeStyle = 'rgba(255, 255, 255, .8)'
    this.ctx.lineWidth = 2
    this.ctx.arc(this.canvas.current.width / 2, this.canvas.current.height / 2, 50, this.state.initialValue, this.state.acumulateValue, false)
    this.ctx.stroke()
    let newValue = this.state.acumulateValue + (Math.PI / 35)
    if(newValue > 7) newValue = .8
      this.setState({ acumulateValue: newValue })
    if(this.state.acumulateValue > 7) {

      this.setState({acumulateValue: 0})
      this.ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height)
    }

  }

  render() {

    return (
      <div className={"item-menu-container"} onClick={this.props.onClick} ref={this.container}>
        <div className={this.state.checked ? "item-menu item-menu-active" : "item-menu"}>
          <i className={`fas fa-${this.props.icon}`}/>
          {this.getCanvas}
        </div>
      </div>
    )
  }

}

export default ItemMenu
