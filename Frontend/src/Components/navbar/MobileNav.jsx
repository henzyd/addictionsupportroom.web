import React from 'react'
import {GrClose} from 'react-icons/gr'
import { NavLink } from 'react-router-dom'
import { navbarList } from '../../Data/navbar'


const MobileNav = ({setIsOpen}) => {
  return (
    <div className='fixed bg-blue w-[100%] h-[100rem] right-0 top-0 '>
        <button
            className='absolute right-[6%] top-[1.5%] text-white text-[24px]'
            onClick={() => setIsOpen(false)}
        >
            <GrClose/>
        </button>
          <ul className='mt-[60px]'>
            {navbarList.navList.map(({index, page, link}) => 
              <NavLink 
                key={index} 
                to={link}
                onClick={() => setIsOpen(false)}
              >
                <li className='p-4 font-[700] mx-3 text-white'>{page}</li>
              </NavLink>
            )}
          </ul>
    </div>
  )
}

export default MobileNav