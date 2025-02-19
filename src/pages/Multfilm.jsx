import React from 'react'

import InputSelekt from '../components/InputSelekt'

import multic from '../img/multic-page.jpg'

const Multfilm = () => {
    return (
        <main className='bg-gradient-to-b from-white to-green-100 pb-16 md:py-10'>
            <div className='mb-5'>
                <div className='relative w-full'>
                    <img className='w-full h-36 md:h-56' src={multic} alt="" />
                    <h1 className='absolute top-10 left-1/2 -translate-x-1/2 text-xl text-red-800 font-bold sm:text-2xl sm:top-14 md:text-4xl md:top-16 lg:text-5xl'>Multfilm</h1>
                </div>
            </div>
            <InputSelekt />
            <section className='hidden sm:block w-full max-w-7xl mx-auto px-5 mb-8 md:mb-10'>
                <h2 className='text-lg text-red-800 decoration-blue-800 underline underline-offset-8 mb-5 md:text-2xl md:mb-10'>Do'ppi pomidor</h2>
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-y-5'>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>

                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                </div>
            </section>

            <section className='hidden sm:block w-full max-w-7xl mx-auto px-5 mb-8 md:mb-10'>
                <h2 className='text-lg text-red-800 decoration-blue-800 underline underline-offset-8 mb-5 md:text-2xl md:mb-10'>Avto sarguzashtlar</h2>
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-y-5'>

                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                </div>
            </section>
            <section className='hidden sm:block w-full max-w-7xl mx-auto px-5 mb-8 md:mb-10'>
                <h2 className='text-lg text-red-800 decoration-blue-800 underline underline-offset-8 mb-5 md:text-2xl md:mb-10'>Kung fu panda</h2>
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-y-5'>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                </div>
            </section>

            <section className='hidden sm:block w-full max-w-7xl mx-auto px-5 mb-8 md:mb-10'>
                <h2 className='text-lg text-red-800 decoration-blue-800 underline underline-offset-8 mb-5 md:text-2xl md:mb-10'>Qunduz amaki</h2>
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-y-5'>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                </div>
            </section>
            <section className='hidden sm:block w-full max-w-7xl mx-auto px-5 mb-8 md:mb-10'>
                <h2 className='text-lg text-red-800 decoration-blue-800 underline underline-offset-8 mb-5 md:text-2xl md:mb-10'>Nussa</h2>
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-y-5'>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                </div>
            </section>
            <section className='hidden sm:block w-full max-w-7xl mx-auto px-5 mb-8 md:mb-10'>
                <h2 className='text-lg text-red-800 decoration-blue-800 underline underline-offset-8 mb-5 md:text-2xl md:mb-10'>Masha va ayiq</h2>
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-y-5'>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                </div>
            </section>
            <section className='hidden sm:block w-full max-w-7xl mx-auto px-5 mb-8 md:mb-10'>
                <h2 className='text-lg text-red-800 decoration-blue-800 underline underline-offset-8 mb-5 md:text-2xl md:mb-10'>Sara multfilmlar</h2>
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-y-5'>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                    <div className='videobek relative swiper-slide group max-w-md pb-3 rounded-xl transition-all duration-300 cursor-pointer border-2 shadow-md bg-white video--enabled'>
                        <a className='w-full inline-flex flex-col justify-center items-center' href="">
                            <picture className='w-full h-full rounded-t-xl bg-slate-200 relative'>
                                <source srcSet='https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg' />
                                <img className='w-full min-h-[180px] rounded-t-xl' src="https://i.ytimg.com/vi/4ws_yA-ei2o/maxresdefault.jpg" alt="" />
                                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl'>
                                    <i className='text-6xl text-red-600 fa-brands fa-youtube group-hover:text-red-400 transition-all duration-500'></i>
                                </button>
                            </picture>
                        </a>
                        <h3 id='video-title' className='bg-transparent text-lg text-center text-black font-semibold mt-1'>Oltin tarvuz</h3>
                        <span className='hidden'>uz</span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Multfilm