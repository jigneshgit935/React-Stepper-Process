import React from 'react'

const Checkout = (stepsConfig = []) => {
    console.log(stepsConfig);
  return (
    <div>{
        stepsConfig.map((item,index)=>(
            <div>
                <div>
                    <div>{index+1}</div>
                    <div>{item.name}</div>
                </div>
            </div>
        ))
    }</div>
  )
}

export default Checkout