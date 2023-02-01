import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MY_HOST, imgNodeUrl } from '../../my-config'

import ProductCard from '../components/ProductCard'
import BasicPagination from '../components/BasicPagination'

function Product() {
  const [prodData, setProdData] = useState([])

  // const [prodCate, setProdCate] = useState(0)

  const [condition, setCondition] = useState({
    category: 0,
    page: 1,
  })

  const [totalPages, setTotalPages] = useState(0)

  const getProdData = async () => {
    const u = new URLSearchParams({ ...condition })

    const { data } = await axios.get(
      `${MY_HOST}/products/list/api?${u.toString()}`
    )

    setProdData(data.rows)
    setTotalPages(data.totalPages)
  }

  useEffect(() => {
    getProdData()
  }, [condition])

  return (
    <div className="pt-24">
      <ul className="flex mx-auto max-w-md items-center justify-around border rounded-lg overflow-hidden mb-8">
        <li
          className={`grow py-1 text-center font-medium hover:text-blue-500 cursor-pointer ${
            condition.category === 0
              ? 'bg-blue-500 text-white hover:text-white'
              : ''
          }`}
          onClick={() => setCondition({ ...condition, category: 0, page: 1 })}
        >
          所有商品
        </li>
        <li
          className={`grow py-1 text-center font-medium hover:text-blue-500 cursor-pointer ${
            condition.category === 1
              ? 'bg-blue-500 text-white hover:text-white'
              : ''
          }`}
          onClick={() => setCondition({ ...condition, category: 1, page: 1 })}
        >
          狗狗商品
        </li>
        <li
          className={`grow py-1 text-center font-medium hover:text-blue-500 cursor-pointer ${
            condition.category === 2
              ? 'bg-blue-500 text-white hover:text-white'
              : ''
          }`}
          onClick={() => setCondition({ ...condition, category: 2, page: 1 })}
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
      <div className="pb-36 w-full flex justify-center">
        <BasicPagination
          totalPages={totalPages}
          condition={condition}
          setCondition={setCondition}
        />
      </div>
    </div>
  )
}

export default Product
