import axios from "axios"

export const retrieveItems = async () => {
  const data = await axios.get("http://starlord.hackerearth.com/recipe")
  console.log(data)
  return data
}
