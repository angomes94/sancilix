"use client";

import Link from 'next/link'
import React, {useContext} from 'react'
import { LanguageContext } from '@/app/Context/languangeContext'

export default function Navbar() {

    const { translations, language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
      };

    return (
        <div className=' w-full h-16'>
            <nav className=' flex flex-row items-center h-full w-full text-blue-950'>
                <div className='flex flex-1 flex-row px-5'>
                    <Link className='font-bold'  href="/">Sancilix</Link>
                </div>
                <div className='flex flex-1 flex-row items-center justify-end px-5'>
                    <Link href="/projects" className=' font-thin pr-5'>{translations.navbarProjects}</Link>
                    <Link className='font-thin' href="/team">{translations.navbarTeam}</Link>
                    <select value={language} onChange={handleLanguageChange} className=' mx-5'>
                        <option className="text-black" value="pt">PT</option>
                        <option className="text-black" value="en">EN</option>
                    </select>
                </div>

            </nav>
        </div>
    )
}
