import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function LinePayConfirm() {
  const location = useLocation()
  const navigate = useNavigate()
  const transactionId = new URLSearchParams(location.search).get(
    'transactionId'
  )
  const orderId = new URLSearchParams(location.search).get('orderId')
  console.log({ transactionId, orderId })

  async function confirm() {
    const { data } = await axios.get(
      `http://localhost:3005/cart/linePayConfirm?transactionId=${transactionId}&orderId=${orderId}`
    )
    console.log(data)
    if (data.success) {
      console.log('資料庫完成修改')
      navigate('/')
      // 導到訂單完成頁
    } else {
      alert('付款失敗！')
    }
  }

  useEffect(() => {
    confirm()
  }, [])

  return <div className="pt-24">付款成功</div>
}

export default LinePayConfirm
