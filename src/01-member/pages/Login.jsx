import React from 'react'
import {Link} from 'react-router-dom'

function Login() {

  return (
    <div className='max-w-2xl mx-auto pt-4'>
        <div className='bg-white shadow-md border border-gray-200 rounded-lg mx-auto max-w-sm p-4 sm:p-6 lg:p-8'>
            <form className='space-y-6'>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">歡迎回來～～～</h3>
            <div className='w-full'>
                <label htmlhtmlFor='account' className='text-sm font-medium text-gray-900 mb-2 block'>帳號</label>
                <input className='bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5' name='account' id='account'
                type='text' placeholder='請輸入您的帳號'></input>
            </div>
            <div className='w-full'>
                <label htmlhtmlFor='password' className='text-sm font-medium text-gray-900 mb-2 block'>密碼</label>
                <input className='bg-gray-50 border-gray-300 border text-sm rounded-lg w-full p-2.5' name='password' id='password'
                type='password' placeholder='••••••••'></input>
            </div>
            <div className='w-full flex justify-between'>
                <div class="flex items-start">
                    <div class="flex items-center h-5">
					    <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                    </div>
					<div class="text-sm ml-3">
						<label htmlFor="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
					</div>
                </div>
                <div class="flex items-start mr-5">
                    <div class="flex items-center h-5 ">
					    <Link to='/forget-pw' className='font-medium text-blue-700 '>Lost Password?</Link>
                    </div>
                </div>
            </div>
            
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Login to your account
                </button>
                <div className='flex itmes-start'>
                    <p className='font-medium text-gray-600 mr-3'>Not registered?</p>
                    <Link className='font-medium text-blue-700' to='/register'>Create account</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login