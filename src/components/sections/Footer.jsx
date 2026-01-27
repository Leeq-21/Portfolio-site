import React from 'react'
import { socialImgs } from '../../Constants'

const Footer = () => {
  return (
    <footer  className='footer'>
        <div className="footer-container">
            <div className="flex flex-col justify-center items-center md:items-start">
                <a href="/Leeq's%20CV.pdf" download="Leeq_CV.pdf" target='_blank'>Here's my Resume</a>
            </div>
            <div className="socials">
                {socialImgs.map((img) => (
                    <a className=' icon' target='_blank' href={img.url} key={img.url}>
                        <img src={img.imgPath} alt="" />
                    </a>
                ))}
            </div>

            <div className="flex flex-col justify-center ">
                <p className='text-center md:text-end'>
                  <a href="https://t.me/internal_pointer_variable" target='_blank'>
                    {new Date().getFullYear() } Leeq | GUF Dev.
                  </a>
                </p>
            </div>
        </div>  
    </footer>
  )
}

export default Footer