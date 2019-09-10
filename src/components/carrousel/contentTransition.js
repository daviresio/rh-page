import React from "react"


const ContentTransition = OriginalComponent => {

  return ({isMounted, ...props}) => {

    return <OriginalComponent {...props}/>
  }

}

export default ContentTransition
