import React from 'react'
import { Helmet } from 'react-helmet'
// img
import hero from '../img/hero.jpg'
import InputSelekt from '../components/InputSelekt'

const Badantarbiya = () => {
    return (
        <main className='bg-gradient-to-b from-white to-green-50 pb-16 '>
            <Helmet>
                <link rel="canonical" href="https://yuldizlibolalar.vercel.app/badantarbiya" />
                <meta name="description" content="Yulduzli bolalar badantarbiya sahifasida bolalar uchun qiziqarli mashiqlar to‘plami mavjud." />
            </Helmet>
            

            <div className='w-full mb-5 '>
                <div className='relative w-full '>
                    <img className='w-full h-36 md:h-56' src={hero} alt="hero img" />
                    <h1 className='absolute top-10 left-1/2 -translate-x-1/2 text-xl text-red-800 font-bold sm:text-2xl sm:top-14 md:text-4xl md:top-16 lg:text-5xl'>Badantarbiya</h1>
                </div>
            </div>

            <InputSelekt/>
           
        </main>
    )
}

export default Badantarbiya