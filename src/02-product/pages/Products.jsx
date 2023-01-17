import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MY_HOST, imgNodeUrl } from '../../my-config'

import ProductCard from '../components/ProductCard'

function Product() {
  const [prodData, setProdData] = useState([])

  const getProdData = async () => {
    const res = await axios.get(`${MY_HOST}/products/list/api`)
    // console.log(res.data)
    setProdData(res.data)
  }
  useEffect(() => {
    getProdData()
  }, [])

  return (
    <>
      <div className="flex flex-wrap items-stretch">
        {prodData.length &&
          prodData.map((p, i) => {
            return <ProductCard prodData={p} key={i} />
          })}
      </div>
    </>
  )
}

export default Product
