"use client";

import Link from 'next/link'
import React, { useContext } from 'react'
import { LanguageContext } from '@/app/Context/languangeContext'
import Image from 'next/image';
import ReactFlagsSelect from 'react-flags-select'

export default function Navbar() {


    const { translations, language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className=' w-full h-16 mb-5'>
            <nav className=' flex flex-row items-center h-full w-full text-blue-950'>
                <div className='flex flex-1 flex-row px-5'>
                    <Link href="/">
                        <Image className='hover:scale-105 duration-300 active:scale-95' src="/logo.png" alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <div className='flex flex-1 flex-row items-center justify-end px-5'>
                    <Link href="/projects" className=" font-thin pr-5 hover:scale-105 duration-300 active:scale-95">{translations.navbarProjects}</Link>
                    <Link href="/team" className=" font-thin hover:scale-105 duration-300 active:scale-95"  >{translations.navbarTeam}</Link>
                    <ReactFlagsSelect
                        selected={language}
                        countries={['PT', 'GB']}
                        customLabels={{ "GB": "EN", "PT": "PT" }}
                        defaultCountry='PT'
                        onSelect={(code) => setLanguage(code)}
                        className=' mx-5'
                    />
                </div>

            </nav>
        </div>
    )
}
