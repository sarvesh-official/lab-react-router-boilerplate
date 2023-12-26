import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    
        <div className='flex items-center justify-between p-4 mb-9 bg-slate-800'>
            <div className='flex space-x-1'>  
              <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
              <Link to= {"/"}><h1 className='text-2xl text-white font-semibold'>Kalvium ❤️</h1></Link>
              </div>
              <div className='flex gap-16'> 
                  <Link to={"/contact"}>
                  <h1 className='text-2xl text-white font-semibold'>Contact</h1></Link>
                  <Link to={"/about"}>
                  <h1 className='text-2xl text-white font-semibold'>About</h1></Link>
              </div>

       </div>   
  
  )
}
