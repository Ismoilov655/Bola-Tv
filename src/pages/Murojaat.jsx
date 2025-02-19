import React from 'react'

import hero from '../img/hero.jpg'

const Murojaat = () => {
    return (
        <main className='pb-16 md:py-10'>
            <div className='mb-10'>
                <div className='relative w-full'>
                    <img className='w-full h-36 md:h-56' src={hero} alt="" />
                    <h1 className='absolute top-10 left-1/2 -translate-x-1/2 text-xl text-red-800 font-bold sm:text-2xl sm:top-14 md:text-4xl md:top-16 lg:text-5xl'>Murojaat yo'llash</h1>
                </div>
            </div>

            <section className='w-full max-w-7xl mx-auto px-5'>
                <h2 className='text-2xl mb-7 font-bold text-red-800'>Taklif va fikrlar</h2>
                <div>
                    <div className='flex justify-between space-x-7'>
                        <form className='w-full flex flex-col' action="">
                            <div className='flex space-x-3 mb-3'>
                                <input className='w-full p-3  rounded-lg border-2 ' required placeholder='Ismingiz' type="text" />
                                <input className='w-full p-3 rounded-lg border-2 ' required pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
                                    placeholder='Telefon raqamingiz' type="text" />
                            </div>
                            <input className='w-full p-3 rounded-lg border-2  mb-3 ' required placeholder='Telegram user' type="text" />
                            <textarea className='w-full resize-none min-h-40 p-2 rounded-lg  border-2  ' placeholder='Taklif va fikrlar' name="" id=""></textarea>
                            <div className='flex justify-end mt-2'>
                                <button className='bg-blue-200 px-8 py-2 rounded transition-all duration-300 hover:bg-green-300'>Yuborish</button>
                            </div>
                        </form>

                        <div className='w-full bg-green-200 text-center  rounded-lg p-5 flex flex-col items-center'>
                            <div className='max-w-sm items-center'>
                                <h3 className='text-xl font-semibold text-blue-500 mb-1'>Takliflar</h3>
                                <p className='text-center'>Agarda har qanday takliflaringiz bo'lsa murojaat yo'llashdan tortinmang. Agarda sizning takliflaringizni ko'pchilikka foydali deb topsak, taklifingiz asosida yangiliklar qo'shishga harakat qilamiz.</p>

                            </div>
                            <div className='max-w-sm'>
                                <h3 className='text-xl font-semibold text-blue-500 mb-1'>Fikrlar</h3>
                                <p className='text-lg'>Saytimiz haqida har qanday fikrlaringizni yuborishingiz mumkin. Biz ular asosida ish yuritishga harakat qilamiz.</p>

                            </div>
                            <div>
                                <h3 className='text-xl font-semibold mb-1 text-blue-500'>Qo'ng'iroq qilish</h3>
                                <p>+99891 496-29-07</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Murojaat