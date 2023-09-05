import React from 'react'
import { CgSearch } from 'react-icons/cg'

const Nav = ({search , minimum , maximum}) => {
  return (
    <section className='px-16 pt-7'>
        <div className='flex items-center gap-2'>
            <CgSearch className='text-lg font-light'/>
            <input onChange={(e) => search(e.target.value)} className='outline-none border-b px-6 py-2 h-10' type='text' placeholder='Seach Name' />
        </div>
        <div>
            <input type='range' min="0" max="100" step="1" onChange={(e) => minimum(e.target.value)} />
            <input type='range' min="0" max="100" step="1" onChange={(e) => maximum(e.target.value)} />  
        </div>
    </section>
  )
}

export default Nav