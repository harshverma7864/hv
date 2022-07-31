import React from 'react'

import navstyle from '../../styles/nav.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
   <>
   <div className={`${navstyle.header} shadow-lg` }>
     <div className={navstyle.tophead}></div>
     <div className={navstyle.midhead}>
        <ul>
            <li className={navstyle.menu}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></li>
            <li className={navstyle.logo} > <Link className={navstyle.lin} passHref={true} href={`/`}><Image className={navstyle.Headlogo} width={229} height={160} quality={100} src="/logo.png"/></Link></li>
            <li className={navstyle.hid}>Category</li>
            <li className={navstyle.hid}>Brands</li>
            <li className={navstyle.hid}>Inspiration</li>
            <li className={navstyle.hid}>Plumber Contact</li>
            <li className={navstyle.search}> <input type="search" placeholder='Search on HomelyVirtuals' /> </li>
            <li className={navstyle.user}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></li>
<li className={navstyle.bag}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></li>
        </ul>
     </div>
    
     <div className={navstyle.searchhead}><input type="text" placeholder='Search on HomelyVirtuals' /></div>
     <div className={navstyle.bottomhead}>
        <ul>
        <Link  className={navstyle.lin} passHref={true} href={`/categories/${'Newarrival'}`}><li>New Arrival</li></Link>
        <Link className={navstyle.lin} passHref={true} href={`/categories/${'Bathroom'}`}><li>Bathroom</li></Link>
        <Link className={navstyle.lin} passHref={true} href={`/categories/${'Kitchen'}`}><li>Kitchen</li></Link>
        <Link className={navstyle.lin} passHref={true} href={`/categories/${'Decoration'}`}><li>Decoration</li></Link>
        <Link className={navstyle.lin} passHref={true} href={`/categories/${'Lighting'}`}><li>Lighting</li></Link>
        </ul>
     </div>
   </div>
   </>
  )
}

export default Navbar