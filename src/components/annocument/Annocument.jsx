import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "50%",
    height: "340px",
  }
  const mystyle1 = {
    width: "50%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='./images/OIP1.jpg' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='./images/OIP.jpg' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
