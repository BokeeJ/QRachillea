
import React from 'react'

function Menu() {
    return (
        <div className='w-full lg:h-full h-screen flex justify-center relative bg-black'>
            <img className='lg:w-[60%] h-full object-cover object-center' src="/Meni.webp" alt="meni" />
            {/* SocialNetwork */}
            <div className='absolute bottom-0 flex gap-3 lg:m-3 p-1'>
                <a target='_blank' href="https://www.instagram.com/rakija_achillea?igsh=ZzVxY2dpMWUxeGlu" title="instagram">
                    <img className='lg:w-7 lg:h-7 w-5 h-5' src="/instagram.png" alt="instagram" />
                </a>
                <a target='_blank' href="https://www.facebook.com/marko.a.andra/" title="instagram">
                    <img className='lg:w-7 lg:h-7 w-5 h-5' src="/facebook.png" alt="facebook" />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/marko-andric/" title="instagram">
                    <img className='lg:w-7 lg:h-7 w-5 h-5' src="/linkedin.png" alt="linkedin" />
                </a>
            </div>
            <div className='absolute bottom-0 right-0'>
                <h2 className='text-white lg:text-xl text-[10px] font-latto'>Designed by BojanD.</h2>
            </div>
        </div>
    )
}

export default Menu