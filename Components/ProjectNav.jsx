"use client";

import React, { useContext } from 'react'
import { LanguageContext } from '@/app/context/languangeContext'
import ReactFlagsSelect from 'react-flags-select'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLeftLong} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function ProjectNav() {

  const { language, setLanguage } = useContext(LanguageContext);

  return (

    <div className='flex flex-row justify-center items-center w-full px-10 pt-5 '>
      <Link className=' text-4xl duration-300 hover:scale-110' href="/">
        <FontAwesomeIcon icon={faLeftLong} />
      </Link>
      <div className=' grow'></div>
      <ReactFlagsSelect
        selected={language}
        countries={['PT', 'GB']}
        customLabels={{ "GB": "EN", "PT": "PT" }}
        defaultCountry='PT'
        onSelect={(code) => setLanguage(code)}
        selectedSize={16}
        optionsSize={16}
        className=' font-thin '
      />
    </div>

  )
}
