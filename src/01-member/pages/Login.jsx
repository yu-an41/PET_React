import React from 'react'

function Login() {
  return (
    <div className='max-w-2xl mx-auto'>
        <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8'>
            <form className='space-y-6'>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">歡迎回來～～～</h3>
            <div className='w-full'>
                <label htmlFor='account' className='text-sm font-medium text-gray-900 mb-2 block'>帳號</label>
                <input className='bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5' name='account' id='account'
                type='text' placeholder='請輸入您的帳號'></input>
            </div>
            <div className='w-full'>
                <label htmlFor='password' className='text-sm font-medium text-gray-900 mb-2 block'>密碼</label>
                <input className='bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5' name='password' id='password'
                type='password' placeholder='••••••••'></input>
            </div>
                
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600">Login to your account</button>
            </form>
        </div>
    </div>
  )
}

export default Login