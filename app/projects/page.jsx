"use client";

import React, {useContext} from 'react'
import { LanguageContext } from '../Context/languangeContext';


export default function Page() {

  const {translations} = useContext(LanguageContext);

  return (
    <div>{translations.aboutPageText}</div>
  )
}
