import React from 'react'

const InputSelekt = () => {
    return (
        <section className='w-full max-w-7xl mx-auto px-5 mb-10 md:mb-16'>
            <form className='flex items-center justify-end sm:justify-between'>
                <input id='name-imput' className='hidden sm:block w-3/5 text-base bg-transparent border-b border-br-darkBlue focus:outline-none mr-10 md:text-lg md:w-1/2' type="text" />

                <select className='class="p-1 rounded-sm border-2 border-dotted border-br-green focus:outline-none sm:p-2 md:w-36"' name="" id="">
                    <option selected disabled>Tilni tanlang</option>
                    <option value="Barchasi">Barchasi</option>
                    <option value="O'zbekcha">O'zbekcha</option>
                    <option value="Inglizcha">Inglizcha</option>
                    <option value="Ruscha">Ruscha</option>
                </select>
            </form>
        </section>
    )
}

export default InputSelekt