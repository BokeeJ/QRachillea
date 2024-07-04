
import React from 'react'
///react icons
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


function Menu() {
    return (
        <div className='w-full lg:h-full h-screen flex flex-col items-center justify-center relative bg-black'>
            <img className='lg:w-[60%]  h-full  object-center' src="/najnovijiMeni.webp" alt="meni" />
            {/* SocialNetwork */}
            <div className='flex gap-3 lg:m-3 p-1 absolute bottom-0'>

                <a target='_blank' href="https://www.instagram.com/rakija_achillea/?igsh=ZzVxY2dpMWUxeGlu" title="instagram">
                    <CiInstagram size={20} color='white' />
                </a>
                <a target='_blank' href="https://www.facebook.com/people/Rakija-Achillea/100089827292627/" title="facebook">
                    <CiFacebook size={20} color='white' />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/marko-andric/" title="instagram">
                    <CiLinkedin size={20} color='white' />
                </a>
            </div>
            <div className='absolute bottom-0 right-0'>
                <h2 className='text-white lg:text-xl text-sm font-latto'>Designed by BojanD.</h2>
            </div>
        </div>
    )
}

export default Menu