import React from 'react'
import SectionHeading from './SectionHeading'
import { Bell, ToyBrick } from 'lucide-react'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Button } from '@nextui-org/button'

const Benefits = () => {
    return (
        <>
            <SectionHeading section_name='How This Community Benefits You?' />
            <div className='flex flex-col md:grid md:grid-cols-2 gap-3 lg:px-24 2xl:px-36'>
                <Card>
                    <CardHeader>
                        <Button isIconOnly color='primary' className='p-2' size='lg'><Bell size={30} strokeWidth={1.5} /></Button>
                        <p className='ml-3 text-xl font-medium'>Live Discussions</p>
                    </CardHeader>
                    <CardBody>
                        <p className='text-gray-300'>Stay informed and participate in live discussions on the latest cybersecurity trends, exclusively for our members</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Button isIconOnly color='primary' className='p-2' size='lg'><ToyBrick size={30} strokeWidth={1.5} /></Button>
                        <p className='ml-3 text-xl font-medium'>Collaboration</p>
                    </CardHeader>
                    <CardBody>
                        <p className='text-gray-300'>Join forces for collaborative pentesting, hacking, and CTF competitions alongside fellow enthusiasts!</p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Benefits