"use client";
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/context/languangeContext';
import InfoCard from './InfoCard';

export default function AboutUs() {

    const { translations } = useContext(LanguageContext);


    return (
            <div id='aboutus' className=' relative flex flex-col md:flex-row ' >
                <div className='flex flex-col flex-1 justify-center items-center md:mt-5 mt-16 '>
                    <h1 className='absolute top-5 left-3 md:top-16 md:left-12 font-extrabold uppercase text-xl md:text-6xl'>{translations.aboutUsTitle}</h1>
                    <p className=' font-extraligh text-xs text-start md:text-lg md:p-16 p-8 bg-slate-400 rounded-r-full'>{translations.aboutUsText}</p>
                </div>
                <div className=' flex flex-1  justify-center  '>
                    <div className='flex flex-col '>
                    <InfoCard title={translations.infoCardTurnKeyTitle} text={translations.infoCardTurnKeyText}/>
                    <InfoCard title={translations.infoCardRenovationsTitle} text={translations.infoCardRenovationsText}/>
                    <InfoCard title={translations.infoCardConsultingTitle} text={translations.infoCardConsultingText}/>
                    </div>
                </div>
            </div>
    )
}
