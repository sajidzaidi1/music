import React from 'react'
import Link from 'next/link'
import { Button } from "./ui/moving-border"
import CardHoverEffectDemo from './ui/CardHover'

const UpcommingWebnar = () => {

    return (
        <div className='p-12 bg-gray-900 py--5'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className='text-canter'>
                    <h2 className='text-base text-center text-teal-600 font-semibold tracking-wide uppercase'>FEATURE WEBINARS</h2>
                    <p className='text-2xl text-teal-400 font-semibold tracking-wide uppercase text-center' >Enhance Your Future Journey</p>
                </div>
                <div className='mt-10'>
                    <CardHoverEffectDemo />
                </div>
                <div className='mt-10 text-center hover:bg-gray-900 duration-700'>
                    <Link href={"/allwebinar"}><Button borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white
        border-neutral-200 dark:border-slate-800">View All Webinars</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default UpcommingWebnar