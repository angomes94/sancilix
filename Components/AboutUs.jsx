"use client";
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/context/languangeContext';
import InfoCard from './InfoCard';

export default function AboutUs() {

    const { translations } = useContext(LanguageContext);


    return (
            <div className=' flex flex-col justify-center items-center rounded-3xl bg-white text-blue-950 md:p-10 p-5 m-10 ' >
                <div className='flex flex-1 flex-col '>
                    <p className=' font-extraligh text-xs md:text-lg'>{translations.aboutUsText}</p>
                </div>
                <div className=' flex flex-1 flex-col md:flex-row  pt-5 '>
                    <InfoCard title={translations.infoCardTurnKeyTitle} text={translations.infoCardTurnKeyText}/>
                    <InfoCard title={translations.infoCardRenovationsTitle} text={translations.infoCardRenovationsText}/>
                    <InfoCard title={translations.infoCardConsultingTitle} text={translations.infoCardConsultingText}/>
                </div>
            </div>
    )
}
