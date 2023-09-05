import { Route, Routes } from "react-router-dom"
import Data from "./components/Data"
import { dataItem } from "./components/item"
import Nav from "./components/Nav"
import { useEffect, useState } from "react"


function App() {
  const [dataArray, setDataArray] = useState([])
  const [searchByName, setSearchByName] = useState('')

  const [minimumValue, setMinimumValue] = useState('')
  const [maximumValue, setMaximumValue] = useState('')
  useEffect(() => {
    setDataArray(dataItem)
  }, [])

  console.log(minimumValue, maximumValue)

  useEffect(() => {
    if(searchByName) {
      const newArr = dataArray.filter(i => i.name.toLowerCase().includes(searchByName))
      setDataArray(newArr)
    }
    else {
      setDataArray(dataItem)
    }
  }, [searchByName])

  useEffect(() => {
    const min = parseInt(minimumValue)
    const max = parseInt(maximumValue)

    if(parseInt(min) && parseInt(max)) {
        const newArr = dataItem.filter(i => i.price >= min && i.price <= max);
        console.log(newArr)
        setDataArray(newArr)
    } else {
      setDataArray(dataItem)
    }

  }, [minimumValue, maximumValue])



  return (
    <main>
      <Nav search={setSearchByName} minimum={setMinimumValue} maximum={setMaximumValue} />
      <Routes>
        <Route path="/" element={<Data data={dataArray} />} />
      </Routes>
    </main>
    )
}

export default App
