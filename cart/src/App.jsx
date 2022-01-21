import React, { useEffect, useCallback, useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { getProductsById, postProducts, getProducts } from 'home/products'
import Table from './table';

const App = () => {

  const [details, setDetails] = useState({
    name: '',
    title: '',
    description: '',
    url: '',
    filename: '',
    id: Math.floor(Math.random() * 100),
    author: '',
    filename: ''
  })
  const [totalDetails, setTotalDetails] = useState('')
  useEffect(() => {
    getProductss()
  }, [])

  const getProductss = useCallback(async () => {
    const displayDetails = await getProducts()
    console.log(displayDetails)
    setTotalDetails(displayDetails)
  }, [totalDetails, getProductss])
  const handleChange = (e) => {
    e.preventDefault();
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    })
  }

  const postDetails = () => {
    const datas = {
      "id": details.id,
      "title": details.title,
      "description": details.description,
      "author": details.author,
      "url": details.url,
      "image": details.filename
    }
    return datas;
  }
  const postProduct = useCallback(async (e) => {
    e.preventDefault();
    const datas = postDetails();
    const postData = await postProducts(datas)
    console.log(postData.data)
    getProductss()
    setDetails({ name: '', tile: "", url: "", author: "", filename: '' })
  }, [])
  return (
    <div style={{ display: "table-row-group" }}>
      <form>
        <input type="text" name="name" value={details.name} placeholder="Name" onChange={(e) => handleChange(e)} />
        <input type="text" name="title" placeholder="Title" onChange={(e) => handleChange(e)} />
        <input type="textarea" name="description" placeholder="Description" onChange={(e) => handleChange(e)} />
        <input type="text" name="url" placeholder="Url" onChange={(e) => handleChange(e)} />
        <input type="text" id="id" name="author" onChange={(e) => handleChange(e)} />
        <input type="file" id="myFile" name="filename" onChange={(e) => handleChange(e)} />
        <button onClick={(e) => postProduct(e)}>POST DATA</button>
      </form>
      <Table totalDetails={totalDetails} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("app"));
