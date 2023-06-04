"use client";

import React, { useContext } from 'react'
import { LanguageContext } from '@/app/context/languangeContext'
import ReactFlagsSelect from 'react-flags-select'
import { motion } from "framer-motion";


export default function Navbar() {


    const { translations, language, setLanguage } = useContext(LanguageContext);



    return (
        <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{
                type: "spring",
                bounce: 0.25,
                stiffness: 50,
                delay: 0.5,
            }}
            className=' absolute top-5 z-10 w-full mb-5 text-white'>
            <nav className=' flex flex-row items-center h-full w-full '>
                <div className='flex flex-1 flex-row items-center justify-end px-2 font-bold text-xs md:text-lg'>
                    <a href="#aboutus" className="  mr-2 p-2 md:px-5 md:mr-8  rounded-3xl hover:scale-105 hover:bg-white hover:text-blue-950 duration-300 active:scale-95 bg-blue-950 bg-opacity-50">{translations.navbarAboutUs}</a>
                    <a href="#projects" className="  mr-2 p-2 md:px-5 md:mr-8 rounded-3xl hover:scale-105 hover:bg-white hover:text-blue-950 duration-300 active:scale-95 bg-blue-950 bg-opacity-50">{translations.navbarProjects}</a>
                    <a href="#contacts" className=" mr-2 p-2 md:px-5 md:mr-8 rounded-3xl  hover:scale-105 hover:bg-white hover:text-blue-950 duration-300 active:scale-95 bg-blue-950 bg-opacity-50"  >{translations.navbarContacts}</a>

                    <ReactFlagsSelect
                        selected={language}
                        countries={['PT', 'GB']}
                        customLabels={{ "GB": "EN", "PT": "PT" }}
                        defaultCountry='PT'
                        onSelect={(code) => setLanguage(code)}
                        selectedSize={16}
                        optionsSize={16}
                        className=' text-black md:mx-2 '
                    />
                </div>

            </nav>
        </motion.div>
    )
}
