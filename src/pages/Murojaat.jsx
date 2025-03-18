import React, { useState } from 'react';
import hero from '../img/hero.jpg';

const Murojaat = () => {
    const [ism, setIsm] = useState("");
    const [tel, setTel] = useState("");
    const [tgUser, setTgUser] = useState("");
    const [fikr, setFikr] = useState("");
    const [xabar, setXabar] = useState("");

    const botToken = "8051280711:AAHQUquacleKKN9Pjrm5ADhiY9TU8meKaME";
    const chatId = "-1002681437689";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ism.trim() || !tel.trim() || tgUser.trim() || fikr.trim()) {
            setXabar("Iltimos barcha maydonlarni toldiring")   
            };
            

        const message = `📝 *Yangi murojaat!* \n\n👤 Ism: ${ism}\n📞 Telefon: ${tel}\n💬 Telegram: ${tgUser}\n✍️ Fikr: ${fikr}`;
        
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        
        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "Markdown"
            })
        });

        setXabar("✅ Sizning sharhingiz qabul qilindi!");

        setIsm("");
        setTel("");
        setTgUser("");
        setFikr("");

        setTimeout(() => setXabar(""), 3000);
    };

    return (
        <main className='pb-16'>
            <div className='mb-10'>
                <div className='relative w-full'>
                    <img className='w-full h-36 md:h-56' src={hero} alt="" />
                    <h1 className='absolute top-10 left-1/2 -translate-x-1/2 text-xl text-red-800 font-bold sm:text-2xl sm:top-14 md:text-4xl md:top-16 lg:text-5xl'>Murojaat yo‘llash</h1>
                </div>
            </div>

            <section className='w-full max-w-7xl mx-auto px-5'>
                <h2 className='text-2xl mb-7 font-bold text-red-800'>Taklif va fikrlar</h2>

                {xabar && (
                    <div className="bg-green-500 text-white text-center transition-all p-3 rounded-lg mb-5">
                        {xabar}
                    </div>
                )}

                <div className="flex flex-col md:flex-row md:justify-between space-y-5 md:space-y-0 md:space-x-7">
                   
                    <form className="w-full flex flex-col" onSubmit={handleSubmit}>
                        <div className="flex sm:flex-row sm:space-x-3 mb-3">
                            <input
                                className="w-full p-3 rounded-lg border-2 border-gray-300 focus:ring-2 inline-block mr-2 focus:ring-blue-500"
                               
                                placeholder="Ismingiz"
                                type="text"
                                value={ism}
                                onChange={(e) => setIsm(e.target.value)}
                            />

                            <input
                                className="w-full p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
                                required
                                pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
                                placeholder="+998 va Telefon raqamingiz"
                                type="text"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                            />
                        </div>

                        <input
                            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 mb-3"
                            
                            placeholder="Telegram user"
                            type="text"
                            value={tgUser}
                            onChange={(e) => setTgUser(e.target.value)}
                        />
                        <textarea
                            className="w-full resize-none min-h-40 p-2 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
                            placeholder="Taklif va fikrlar"
                            required
                            value={fikr}
                            onChange={(e) => setFikr(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit(e);
                                }
                            }}
                        ></textarea>
                        <div className="flex justify-end mt-2">
                            <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded transition-all duration-300 hover:bg-green-500">
                                Yuborish
                            </button>
                        </div>
                    </form>

                    <div className="w-full bg-green-200 text-center rounded-lg p-5 flex flex-col items-center space-y-5">
                        <div className="max-w-sm">
                            <h3 className="text-xl font-semibold text-blue-500 mb-1">Takliflar</h3>
                            <p className="text-center">
                                Agarda har qanday takliflaringiz bo'lsa, murojaat yo‘llashdan tortinmang. Agarda sizning takliflaringizni ko‘pchilikka foydali deb topsak, taklifingiz asosida yangiliklar qo‘shishga harakat qilamiz.
                            </p>
                        </div>
                        <div className="max-w-sm">
                            <h3 className="text-xl font-semibold text-blue-500 mb-1">Fikrlar</h3>
                            <p className="text-lg">
                                Saytimiz haqida har qanday fikrlaringizni yuborishingiz mumkin. Biz ular asosida ish yuritishga harakat qilamiz.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-blue-500">Qo'ng'iroq qilish</h3>
                            <p>+99891 496-29-07</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Murojaat;
