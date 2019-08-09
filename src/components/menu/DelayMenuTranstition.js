import React from "react"

const transtitionDelay = OriginalComponent => {

  class WrapperComponent extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        isMounted: props.isMounted,
        desapear: false,
      }
    }

    componentWillReceiveProps(nextProps) {
      console.log(this.state, nextProps)
      if (this.state.isMounted && !nextProps.isMounted) {
        setTimeout(() => this.setState({ isMounted: false, desapear: true}), 3000)
      }
    }

    render() {
      return (
        this.state.isMounted ? <OriginalComponent {...{...this.props, desapear: this.state.desapear}} /> : null
      )
    }

  }

  return WrapperComponent
}

export default transtitionDelay
