import Link from 'next/link'
import React from 'react'

export default function navbar() {


    return (
        <div className=' w-full h-14'>
            <nav className=' flex flex-row items-center h-full w-full'>
                <div className='flex flex-1 flex-row px-5'>
                    <Link href="/">Sancilix</Link>
                </div>
                <div className='flex flex-1 flex-row items-center justify-end px-5'>
                    <Link href="/projects" className=' pr-5'>Projects</Link>
                    <Link href="/team">Team</Link>
                    <select className=' mx-5'>
                        <option className="text-black" value="pt">PT</option>
                        <option className="text-black" value="en">EN</option>
                    </select>
                </div>

            </nav>
        </div>
    )
}
