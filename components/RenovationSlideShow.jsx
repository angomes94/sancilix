"use client";
import React, { useState, useContext } from "react";
import { motion } from 'framer-motion';
import { urlFor } from "@/lib/sanityClient";
import { getImageDimensions } from '@sanity/asset-utils';
import { LanguageContext } from "@/app/context/languangeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function RenovationSlideShow({ imagePairs }) {
    const { translations } = useContext(LanguageContext);
    const [currentSlide, setCurrentSlide] = useState(0);

    const isImageLandscape = (imageUrl) => {
        const { width, height } = getImageDimensions({ url: imageUrl });
        return width > height;
    };

    const buttonStyle = {
        backgroundColor: '#718096',
        opacity: '0.5',
        fontSize: '2.25rem',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        transition: 'opacity 0.3s, transform 0.3s',
        ':hover': {
            opacity: '1',
            transform: 'scale(0.95)'
        }
    };

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + imagePairs.length) % imagePairs.length)} style={buttonStyle}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div style={{ flex: 1 }}></div>
                <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % imagePairs.length)} style={buttonStyle}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                {imagePairs.map((pair, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: index === currentSlide ? 1 : 0 }}
                        animate={{ opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0.5rem 2rem',
                            ...(isImageLandscape(urlFor(pair.before).url()) ? { flexDirection: 'column' } : { flexDirection: 'row' })
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0.5rem 1rem' }}>
                            <h1 style={{
                                fontWeight: '600',
                                fontSize: '1.25rem',
                                textAlign: 'center',
                                paddingBottom: '1.25rem'
                            }}>
                                {translations.slideBefore}
                            </h1>
                            <img
                                src={urlFor(pair.before).url()}
                                alt="before"
                                style={{
                                    borderRadius: '0.75rem',
                                    objectFit: 'contain',
                                    ...(isImageLandscape(urlFor(pair.before).url()) ? { maxWidth: '100%', height: 'auto' } : { maxHeight: '100%', width: 'auto' })
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0.5rem 1rem' }}>
                            <h1 style={{
                                fontWeight: '600',
                                fontSize: '1.25rem',
                                textAlign: 'center',
                                paddingBottom: '1.25rem'
                            }}>
                                {translations.slideAfter}
                            </h1>
                            <img
                                src={urlFor(pair.after).url()}
                                alt="after"
                                style={{
                                    borderRadius: '0.75rem',
                                    objectFit: 'contain',
                                    ...(isImageLandscape(urlFor(pair.before).url()) ? { maxWidth: '100%', height: 'auto' } : { maxHeight: '100%', width: 'auto' })
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


