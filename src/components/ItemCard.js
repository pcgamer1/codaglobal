import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { Link } from "react-router-dom"

import "./itemcard.styles.scss"

const ItemCard = (props) => {
  const [isHovering, setIsHovering] = useState(false)
  const [opacity, setOpacity] = useState(1)

  console.log(props)
  const item = props.item

  return (
    <div className='master'>
      <div
        className='card-container'
        style={{
          margin: "5px",
          width: "225px",
          boxShadow: "-7px -7px 15px #ccc",
          height: "320px",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          borderRadius: "10px",
          backgroundImage: `url(${item.image})`,
          backgroundSize: "225px 220px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className='item-meta'
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            color: "rgba(255,255,255,0.8)",
            paddingLeft: "5px",

            borderRadius: "10px",
          }}
        >
          <p style={{ fontSize: "20px" }}>{item.name}</p>
          <div style={{ display: "flex" }}>
            <i className='fas fa-clock' style={{ fontSize: "13px" }} />
            <p
              style={{ position: "relative", bottom: "5px", fontSize: "13px" }}
            >
              &nbsp; 24:33
            </p>
          </div>
          <p style={{ fontSize: "13px" }}>{item.description}</p>
        </div>
      </div>
      <div className='options'>
        <Link to='/details'>
          <Button>View More</Button>
        </Link>
      </div>
    </div>
  )
}

export default ItemCard
