import React from "react"
import { Row, Col } from "react-bootstrap"

import "./searchbar.styles.scss"

const SearchBar = (props) => {
  return (
    <Row>
      <i
        className='fas fa-search'
        style={{
          padding: "2vh",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      />
      <input
        onChange={props.handleChange}
        className='searchval'
        placeholder='Search your favourite recipe'
      />
    </Row>
  )
}

export default SearchBar
