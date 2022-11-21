import React from "react"

const Categories = () => {
  const data = [
    {
      cateName: "Air port & wireless",
    },
    {
      cateName: "Cables & Docks",
    },
    {
      cateName: "Cases & Films",
    },
    {
      cateName: "Charging Devices",
    },
    {
      cateName: "Connected Home",
    },
    {
      cateName: "Headphones",
    },
    {
      cateName: "Watches",
    },
    {
      cateName: "Ipod's",
    },
    {
      cateName: "Homepod mini",
    }
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
