import React, { useEffect, useState, lazy } from "react"
import { Row, Col } from "react-bootstrap"
import { retrieveItems } from "../api"
import { useSearch } from "../hooks/useSearch"

import "./homepage.styles.scss"

const SearchBar = lazy(() => import("./SearchBar"))
const ItemCard = lazy(() => import("./ItemCard"))

const HomePage = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searchVal, setSearchVal] = useState(null)

  const { filteredData } = useSearch({ searchVal, reqData: data })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      let { data: req } = await retrieveItems()
      if (req) {
        console.log(req)
        setData(req)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleChange = (e) => {
    setSearchVal(e.target.value)
  }

  if (filteredData)
    return (
      <div className='container'>
        <div className='content'>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p
              style={{
                color: "grey",
                fontSize: "2vh",
                position: "relative",
                top: "23vh",
              }}
            >
              CATEGORY
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p
              style={{
                color: "black",
                fontSize: "5vh",
                fontWeight: "bolder",
                position: "relative",
                top: "21vh",
              }}
            >
              Pizza & Noodles
            </p>
          </div>
          <div className='search'>
            <SearchBar handleChange={handleChange} />
          </div>
          <div className='item-container'>
            {filteredData.map((d) => (
              <ItemCard item={d} />
            ))}
          </div>
        </div>
      </div>
    )
  else return null
}

export default HomePage
