import React from 'react'
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()

    const getSignout = (e) => {
        e.preventDefault()
        navigate('/')
    }
  return (
    <div className='w-full h-[60px] bg-bege flex justify-between items-center px-5'>
        <div className='font-bold text-white text-xl'>LOGO</div>
        <div>
            <button onClick={(e) => getSignout(e)} className='p-2 bg-bege-two rounded-md'>Sign Out</button>
        </div>
    </div>
  )
}

export default Navbar