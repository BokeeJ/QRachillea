
import React from 'react'
///react icons
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


function Menu() {
    return (
        <div className='w-full lg:h-full h-screen flex justify-center relative bg-black'>
            <img className='lg:w-[60%]  h-full  object-center' src="/AndraNew.webp" alt="meni" />
            {/* SocialNetwork */}
            <div className='absolute bottom-0 flex gap-3 lg:m-3 p-1'>
                <a target='_blank' href="https://www.instagram.com/rakija_achillea/?igsh=ZzVxY2dpMWUxeGlu" title="instagram">
                    <CiInstagram size={35} color='white' />
                </a>
                <a target='_blank' href="https://www.facebook.com/people/Rakija-Achillea/100089827292627/" title="facebook">
                    <CiFacebook size={35} color='white' />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/marko-andric/" title="instagram">
                    <CiLinkedin size={35} color='white' />
                </a>
            </div>
            <div className='absolute bottom-0 right-0'>
                <h2 className='text-white lg:text-xl text-[10px] font-latto'>Designed by BojanD.</h2>
            </div>
        </div>
    )
}

export default Menu