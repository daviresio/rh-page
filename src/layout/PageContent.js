import React from "react"
import { connect } from "react-redux"

const PageContent = ({children, modal}) => {

  const showBlur = Object.values(modal).some(v => v)

  return (
    <main className={showBlur ? 'blur' : null}>{children}</main>
  )
}


const mapStateToProps = ({modal}) => ({
  modal,
})

export default connect(mapStateToProps)(PageContent)
