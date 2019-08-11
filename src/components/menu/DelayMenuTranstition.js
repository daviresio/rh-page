import React, { useEffect, useState } from "react"

const transtitionDelay = OriginalComponent => {

  return ({ isMounted, ...props }) => {

    const [isActive, setActive] = useState(false)
    const [hide, setHide] = useState(false)
    const [show, setShow] = useState(false)

    useEffect(() => {
      if (isActive && !isMounted) {
        setHide(true)
        setShow(false)
        setTimeout(() => setActive(!isActive), 700)
      } else if(!isActive && isMounted) {
        setTimeout(() => {
          setActive(!isActive)
          setShow(true)
          setHide(false)
        }, 700)
      }
    }, [isMounted])


    return (
      isActive ? <OriginalComponent {...{ ...props, hide, show }}  /> : null
    )

  }


}

export default transtitionDelay
