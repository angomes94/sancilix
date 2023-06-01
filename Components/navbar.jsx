"use client";

import React, { useContext } from 'react'
import { LanguageContext } from '@/app/Context/languangeContext'
import ReactFlagsSelect from 'react-flags-select'

export default function Navbar() {


    const { translations, language, setLanguage } = useContext(LanguageContext);



    return (
        <div className=' absolute top-5 z-10 w-full mb-5 text-blue-950'>
            <nav className=' flex flex-row items-center h-full w-full '>                
                <div className='flex flex-1 flex-row items-center justify-end px-2 font-bold text-xs md:text-lg'>
                    <a href="#aboutus" className="  pr-2 md:pr-8 hover:scale-105 duration-300 active:scale-95">{translations.navbarAboutUs}</a>
                    <a href="#projects" className="  pr-2 md:pr-8 hover:scale-105 duration-300 active:scale-95">{translations.navbarProjects}</a>
                    <a href="#contacts" className=" pr-2 md:pr-8  hover:scale-105 duration-300 active:scale-95"  >{translations.navbarContacts}</a>

                    <ReactFlagsSelect
                        selected={language}
                        countries={['PT', 'GB']}
                        customLabels={{ "GB": "EN", "PT": "PT" }}
                        defaultCountry='PT'
                        onSelect={(code) => setLanguage(code)}
                        selectedSize={16}
                        optionsSize={16}
                        className=' font-thin md:mx-2 '
                    />
                </div>

            </nav>
        </div>
    )
}
