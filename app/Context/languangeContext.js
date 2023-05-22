"use client";

import React, { createContext, useState } from 'react';
import { translations as enTranslations } from '../../locale/en';
import { translations as ptTranslations } from '../../locale/pt';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('PT');

  const getTranslations = () => {
    return language === 'PT' ? ptTranslations : enTranslations;
  };

  return (
    <LanguageContext.Provider value={{ 
        language, 
        setLanguage, 
        translations: getTranslations() }}>
      {children}
    </LanguageContext.Provider>
  );
};

