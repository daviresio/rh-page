import React, { Component, createRef } from "react"
import CircleCanvas from "./CircleCanvas"

class ItemMenu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      acumulateValue: 4.72,
      canRender: false,
    }

  }

  beginRender = () => {
    this.timeOut = setTimeout(() => {
      this.animationFrame = requestAnimationFrame(this.updateCircleState)
      this.setState({ canRender: true })
    }, 1000)
  }

  stopRender = () => {
    cancelAnimationFrame(this.animationFrame)
    this.setState({ acumulateValue: 4.72, canRender: false })
    clearTimeout(this.timeOut)
  }

  componentDidMount() {
    if (this.props.checked) {
      this.beginRender()
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.checked) {
      this.beginRender()
    }
    if (!nextProps.checked) {
      this.stopRender()
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame)
  }

  updateCircleState = () => {
    if (!this.state.canRender) return
    let newValue = this.state.acumulateValue + (Math.PI / 600)
    if (newValue > 7) newValue = .8
    if (newValue > 4.70 && newValue < 4.71) {
      this.stopRender()
      this.props.change()
    } else {
      this.setState({ acumulateValue: newValue })
      this.animationFrame = requestAnimationFrame(this.updateCircleState)
    }
  }

  render() {

    return (
      <div className={"item-menu-container"} onClick={this.props.onClick} ref={this.container}>
        <div className={this.props.checked ? "item-menu item-menu-active" : "item-menu"}>
          <i className={`fas fa-${this.props.icon}`}/>
          <CircleCanvas value={this.state.acumulateValue} />
        </div>
      </div>
    )
  }

}

export default ItemMenu
