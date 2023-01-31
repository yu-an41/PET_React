import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MY_HOST, imgNodeUrl } from '../../my-config'

import ProductCard from '../components/ProductCard'

function Product() {
  const [prodData, setProdData] = useState([])

  const [prodCate, setProdCate] = useState(0)

  const getProdData = async () => {
    const res = await axios.get(
      `${MY_HOST}/products/list/api?prodCate=${prodCate}`
    )
    console.log(res.data)
    setProdData(res.data)
  }

  useEffect(() => {
    getProdData()
  }, [prodCate])

  return (
    <div className="pt-24">
      <ul className="flex mx-auto max-w-md items-center justify-around border rounded-lg overflow-hidden">
        <li
          className={`grow py-1 text-center font-medium hover:text-blue-500 cursor-pointer ${
            prodCate === 0 ? 'bg-blue-500 text-white hover:text-white' : ''
          }`}
          onClick={() => setProdCate(0)}
        >
          所有商品
        </li>
        <li
          className={`grow py-1 text-center font-medium hover:text-blue-500 cursor-pointer ${
            prodCate === 1 ? 'bg-blue-500 text-white hover:text-white' : ''
          }`}
          onClick={() => setProdCate(1)}
        >
          狗狗商品
        </li>
        <li
          className={`grow py-1 text-center font-medium hover:text-blue-500 cursor-pointer ${
            prodCate === 2 ? 'bg-blue-500 text-white hover:text-white' : ''
          }`}
          onClick={() => setProdCate(2)}
        >
          貓貓商品
        </li>
      </ul>
      <div className="flex flex-wrap items-stretch">
        {prodData.length &&
          prodData.map((p, i) => {
            return <ProductCard prodData={p} key={i} />
          })}
      </div>
    </div>
  )
}

export default Product
