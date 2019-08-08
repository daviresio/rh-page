import React, { Component, useEffect, useState } from "react"

export default Component => props => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {

    if (!isMounted && props.isMounted) {
      setTimeout(() => {
        setIsMounted(true)
      }, props.delayTime)
    } else if (isMounted && !props.isMounted) {
      console.log("entrei", isMounted, props.isMounted)
      setTimeout(() => {
        setIsMounted(false)
      }, props.delayTime)
    }
  })
  return isMounted ? <Component {...props} /> : null
}
