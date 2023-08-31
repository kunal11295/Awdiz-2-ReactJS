import React from 'react'

const Mapping = ({array}) => {
  return (
    <div id="check"style={{display:'flex',flexWrap:'wrap',justifyContent:"space-between",}}>
      {array && array.map((kunal,i) =>(
          <div key={i} style={{ height: '450px', width: "18%", border: "3px solid black", marginBottom: "40px" }}>
          <img src={kunal.image} />
          <h2>Name : {kunal.name}, {i}</h2>
          <h4>Price : {kunal.price}</h4>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Mapping
