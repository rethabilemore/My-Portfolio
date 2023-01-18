import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="a" classNamee="footer_logo">LadyMore</a>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; LadyMore. All right reserved</small>

      </div>
    </footer>
  )
}

export default Footer