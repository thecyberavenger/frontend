import React from 'react'
import { Link as Linkicon } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import AAIRON_MAN from '@/assets/images/aairon-man.jpg'
import RAGHAV_BHAI from '@/assets/images/raghav-bhai.jpg'
import ASHOKASEC from '@/assets/images/ashokasec.jpg'
import TRIGGERX from '@/assets/images/triggerx.jpg'

    interface Member {
        name: string,
        link: string,
        role: string,
        image: StaticImageData
    }

    const TeamData: Member[] = [
        {
            name: "Govind Rajput",
            link: "https://www.linkedin.com/in/thegovindrajput/",
            role: "Penetration Tester",
            image: AAIRON_MAN
        },
        {
            name: "Raghav Som",
            link: "https://www.linkedin.com/in/raghavsom/",
            role: "Security Engineer",
            image: RAGHAV_BHAI
        },
        {
            name: "Shivam Gupta",
            link: "https://linkedin.com/in/ashokasec",
            role: "Full-Stack Developer",
            image: ASHOKASEC
        },
        {
            name: "Arif Kolhar",
            link: "https://www.linkedin.com/in/mohammad-arif-kolhar-63737a237/",
            role: "Penetration Tester",
            image: TRIGGERX
        },
    ]

const Team = () => {
    return (
        <>
            <SectionHeading section_name='Our Team' />
            <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 px-24 lg:px-12'>
                {TeamData.map(({ name, link, role, image }, index) => (
                    <div className='bg-slate-500/10 border border-slate-400/20 rounded-xl w-full p-4 xl:p-4' key={index}>
                        <div className='flex flex-col'>
                            <span className='text-xs font-medium uppercase text-slate-300'>{role}</span>
                            <Link className='font-medium text-xl mt-1 w-fit flex items-center' href={link}>{name}&nbsp;<Linkicon size={15} color='#5f5f5f6e' /></Link>  
                        </div>
                        <figure className='aspect-square overflow-hidden flex flex-center rounded-xl mt-4'>
                            <Image src={image} style={{ "maxWidth": "none", "height": "100%" }} alt='The Cyber Avengers Team' />
                        </figure>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Team