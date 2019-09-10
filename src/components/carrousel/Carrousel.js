import React, { useEffect, useState } from "react"

const Carrousel = ({ children }) => {

  const count = React.Children.count(children)

  const [curret, setCurrent] = useState(0)


  const previousItem = () => {
    if (curret - 1 < 0) {
      setCurrent(count - 1)
    } else {
      setCurrent(prev => prev - 1)
    }
  }

  const nextItem = () => {
    if (curret === count - 1 || curret > count - 1) {
      setCurrent(0)
    } else {
      setCurrent(prev => prev + 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(nextItem, 5000)
     return ()=> clearInterval(interval)
  }, [curret])
  
  return (
    <div className={"carrosel"}>
      <i className="fas fa-angle-left" onClick={previousItem}/>
      <div className={"carrosel-content"}>

        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {isMounted: curret === i})
        })}

      </div>
      <i className="fas fa-angle-right" onClick={nextItem}/>
    </div>
  )
}

export default Carrousel

