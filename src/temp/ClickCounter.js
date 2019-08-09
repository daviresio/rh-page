import React, { Component } from "react"
import styled from "styled-components"
import withCounter from './withCounter'

class ClickCounter extends Component {

  render() {
    const {count, incrementCount} = this.props
    return (
      <Div onClick={incrementCount}>
        <button>Clicked {count} times</button>
      </Div>
    )
  }
}

export default withCounter(ClickCounter)


const Div = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 20px 0;
`
