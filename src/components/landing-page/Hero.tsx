import React from 'react'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { Button } from '@nextui-org/button'
import { social } from '@/app/config'

const Hero = () => {
    return (
        <div className='hero-gradient flex flex-col items-center'>
            <h1 className='text-[2.75rem] text-center flex flex-col font-extrabold !leading-snug mt-10 mb-4 2xsm:text-[1.75rem] sm:text-[2rem] lg:text-[2.75rem] 2xl:text-6xl'>
                <span>Welcome to <span className='text-blue-500 drop-shadow-2xl'>The Cyber Avenger</span></span>
                <span className="text-gray-400">Guardians of the Virtual Gates</span>
            </h1>
            <h2 className='!leading-normal text-center text-slate-400 flex flex-col lg:text-base xl:text-xl'>
                <Balancer>
                    Join us in this shared exploration, where every
                    <span className="text-slate-200 underline underline-offset-4 mx-2">
                        click
                    </span>
                    and
                    <span className="text-slate-200 underline underline-offset-4 mx-2">
                        collaboration
                    </span>
                    contributes to a safer digital world.
                    It&apos;s a journey crafted by human expertise
                    <span className='text-slate-200 underline underline-offset-4 mx-2'>
                        for individuals
                    </span>
                    seeking practical insights.
                </Balancer>
            </h2>
            <Link href={social.whatsapp} target='_blank' className='mt-10'>
                <Button variant='shadow' color='primary' size='md' className='lg:hidden'>Join Our Community</Button>
                <Button variant='shadow' color='primary' size='lg' className='hidden lg:block'>Join Our Community</Button>
            </Link>
            {/* <button className='light'>Explore Blogs</button> */}
        </div>
    )
}

export default Hero