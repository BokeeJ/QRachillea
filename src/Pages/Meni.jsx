import React from 'react'
import { domaceRakije } from '../Services/Rakije'
import QRCode from 'qrcode.react'
function Meni() {
    return (

        <div className='w-full h-full  flex flex-col items-center' >
            {/* container */}
            <h1 className='text-4xl flex justify-center font-serif'>Achillea</h1>
            <div className='w-[80%] h-full border border-black justify-center item flex flex-col items-center p-2 bg-gray-600' >

                {domaceRakije.map((rakije, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center border border-black w-[60%] p-5 bg-gray-400 shadow-xl'>
                            <h1 className='text-2xl'>{rakije.name}</h1>
                            <hr className='w-[50%] m-2 border-black' />
                            <h1 className='text-2xl'>'{rakije.opis}</h1>
                            <h1 className='text-2xl text-red-600'>{rakije.cena}rsd</h1>
                        </div>
                    )
                })}
            </div>
            <div className='mt-5'>
                <QRCode value="https://q-rachillea.vercel.app/" />
            </div>
        </div >
    )
}

export default Meni
// className="w-full  h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/pozadinaPocetna.webp")' }}>