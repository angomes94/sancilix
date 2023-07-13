"use client";
import React, { useContext } from 'react'
import emailjs from "@emailjs/browser";
import { LanguageContext } from '@/app/context/languangeContext';

export default function Contacts() {

    const { translations } = useContext(LanguageContext);

    const sendEmail = (e) => {
        /*e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_API_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );*/
    };


    return (
        <div id='contacts' className=' flex flex-col md:flex-row text-white bg-blue-950 w-full justify-center items-center md:p-10 pt-5'>
            <div className=' flex md:flex-1 w-full pb-10'>
                <form id="contact" onSubmit={sendEmail} className="max-w-lg w-full px-5">
                    <h1 className='text-center text-lg font-extralight'>{translations.formTitle}</h1>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" htmlFor="user_name">
                            {translations.formName}
                        </label>
                        <input
                            className=" border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-2 focus:outline-dark-slate "
                            id="user_name"
                            type="text"
                            name="from_name"
                            placeholder="Maria Inês"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" htmlFor="user_email">
                            Email
                        </label>
                        <input
                            className=" border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-2 focus:outline-dark-slate "
                            id="user_email"
                            type="email"
                            name="email_id"
                            placeholder="mariaines@example.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" htmlFor="message">
                            {translations.formMessage}
                        </label>
                        <textarea
                            className=" border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-2 focus:outline-dark-slate "
                            id="message"
                            name="message"
                            rows="5"
                            placeholder={translations.formPlaceHolder}
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className=" bg-blue-400 w-full text-white font-medium rounded-xl py-2 duration-300 hover:ring-2 hover:ring-white focus:scale-110"
                            type="submit"
                        >
                            {translations.formButton}
                        </button>
                    </div>
                </form>

            </div>
            <div className='flex flex-col md:flex-1 p-10 justify-center items-center h-max border border-white rounded-3xl my-5 '>
                <h1 className='pb-10 text-lg font-extralight'>{translations.getInTouch}</h1>
                <div className=' text-left '>
                <h1>{translations.team1Title}<span className=' font-thin'>{translations.team1Phone} </span></h1>
                <h1>{translations.team2Title}<span className=' font-thin'>{translations.team2Phone} </span></h1>
                <h1>{translations.email}<span className=' font-thin'>{translations.emailAddress} </span></h1>
                </div>
            </div>

        </div>

    )
}
