import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { changeModalVisibility } from "../../store/actions/modal-actions"

const transtitionDelay = OriginalComponent => {

  return ({ isMounted, openModal, ...props }) => {

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
      isActive ? <OriginalComponent onClick={()=>openModal('cadastro', true)} {...{ ...props, hide, show }}  /> : null
    )

  }


}

const composedFunction = compose(connect(null, dispatch => ({openModal: (target, value) => dispatch(changeModalVisibility(target, value))})), transtitionDelay)

export default composedFunction
