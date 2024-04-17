import React from 'react'
import SectionHeading from './SectionHeading'
import Discord from '@/assets/images/discord.svg'
import Whatsapp from '@/assets/images/whatsapp.svg'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { social } from '@/app/config'

interface Socials {
    name: string,
    link: string,
    msg: string,
    icon: JSX.Element
}

const TeamData: Socials[] = [
    {
        name: "Discord",
        link: social.disord,
        msg: "To get involved in the community, ask questions and share tips.",
        icon: <Image src={Discord} width={25} alt='Discord Logo' />
    },
    {
        name: "Whatsapp",
        link: social.whatsapp,
        msg: "To get involved connections and being update on edge.",
        icon: <Image src={Whatsapp} width={25} alt='Discord Logo' />
    },
    {
        name: "Instagram",
        link: social.instagram,
        msg: "For announcements, tips and general information.",
        icon: <Instagram />
    },
]

const Community = () => {
    return (
        <>
            <SectionHeading section_name='Community' />
            <div className='flex flex-col md:grid md:grid-cols-3 gap-3 lg:px-24 2xl:px-36'>
                {TeamData.map(({ name, link, msg, icon }, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <Button isIconOnly color='primary' className='p-2' size='lg'>{icon}</Button>
                            <Link className='w-fit' href={link}>
                                <p className='ml-3 text-xl font-medium'>{name}</p>
                            </Link>
                        </CardHeader>
                        <CardBody>
                            <p className='text-gray-300'>{msg}</p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Community