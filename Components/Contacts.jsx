"use client";
import React,{useContext} from 'react'
import emailjs from "@emailjs/browser";
import { LanguageContext } from '@/app/Context/languangeContext';

export default function Contacts() {

    const {translations} = useContext(LanguageContext);

    const sendEmail = (e) => {
        e.preventDefault();
    
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
          );
      };


  return (
    <div id='contacts' className='flex flex-col w-full bg-blue-950  '>
        <h1 className='text-center text-white p-5'>Get in Touch:</h1>
    <div className=' flex flex-col md:flex-row text-white bg-blue-950 w-full justify-center items-center md:p-10'>
        <div className=' flex md:flex-1 w-full pb-10'>
      <form id="contact"  onSubmit={sendEmail} className="max-w-lg w-full px-5">
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="user_name">
            Name
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-2 focus:outline-dark-slate "
            id="user_name"
            type="text"
            name="from_name"
            placeholder="John Doe"
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
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className=" border rounded w-full py-2 px-3 text-black leading-tight  focus:outline-2 focus:outline-dark-slate "
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message here"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className=" bg-blue-400 w-full text-white font-medium rounded-xl py-2 duration-300 hover:ring-2 hover:ring-white focus:scale-110"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>

        </div>
    <div className='flex flex-col md:flex-1 p-10 '>
        <h1>{translations.team1Title}<span className=' font-thin'>{translations.team1Phone} </span></h1>
        <h1>{translations.team2Title}<span className=' font-thin'>{translations.team2Phone} </span></h1>
        <h1>{translations.email}<span className=' font-thin'>{translations.emailAddress} </span></h1>
        </div>

    </div>
    </div>
  )
}
