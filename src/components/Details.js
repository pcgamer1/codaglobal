import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import { Divider } from "antd"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"

const Details = () => {
  return (
    <Row
      style={{
        color: "black",
        padding: "8vh 14vw",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Col md={6}>
        <Link to='/' style={{ textDecoration: "none" }}>
          <div style={{ display: "flex" }}>
            <i className='fas fa-long-arrow-alt-left' />
            <p
              style={{
                fontSize: "20px",
                position: "relative",
                top: "-8px",
                left: "5px",
              }}
            >
              Go Back
            </p>
          </div>
        </Link>
        <div
          style={{ border: "1px solid grey", height: "150px", width: "400px" }}
        ></div>
        <br />
        <p style={{ fontSize: "20px" }}>Ingredients : </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          at ducimus deserunt provident fugit voluptatum nemo distinctio, minus,
          quae vitae ipsam nobis dolor dicta enim rem! Aliquam illum repellendus
          expedita?
        </p>
        <p style={{ fontSize: "20px" }}>How to prepare : </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          amet debitis animi minus consequatur accusantium laborum recusandae
          repellat doloribus fuga, consectetur ut aperiam quia soluta voluptas
          repudiandae aspernatur adipisci reiciendis.
        </p>
      </Col>
      <Col md={1}></Col>
      <Col md={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "bolder",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Cheese Burst
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <p
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "45px",
                  height: "20px",
                  fontSize: "13px",
                  textAlign: "center",
                }}
              >
                4/5
              </p>
              &nbsp;&nbsp;&nbsp;
              <i className='fas fa-star' />
              &nbsp;&nbsp;&nbsp;
              <i className='fas fa-star' />
              &nbsp;&nbsp;&nbsp;
              <i className='fas fa-star' />
              &nbsp;&nbsp;&nbsp;
              <i className='fas fa-star' />
            </div>
            <p
              style={{
                fontSize: "15px",
                color: "grey",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              DESCRIPTION
            </p>
            <p style={{ textAlign: "right" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              perspiciatis necessitatibus earum? Nam alias facere nostrum qui
              earum in non, asperiores, accusamus corrupti unde architecto
              voluptatibus maiores! Similique, quam veniam.
            </p>
          </div>
        </div>
        <hr />
        <p
          style={{
            fontSize: "15px",
            color: "grey",
          }}
        >
          Add Comments
        </p>
        <textarea
          style={{
            border: "none",
            borderRadius: "10px",
            height: "150px",
            width: "400px",
          }}
          placeholder='Type something here...'
        />
        <Button
          size='md'
          style={{
            border: "none",
            color: "white",
            backgroundColor: "black",
            width: "400px",
          }}
        >
          Add Comment
        </Button>
      </Col>
    </Row>
  )
}

export default Details
