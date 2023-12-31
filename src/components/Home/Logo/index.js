import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'

import LogoH from '../../../assets/images/LogoH.gif'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  
   const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoH}
        alt="JavaScript,  Developer"
      />

      
    </div>
  )
}

export default Logo

