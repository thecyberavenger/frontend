import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import React from 'react'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { APP_NAME, social } from './../app/config'
import Image from 'next/image'
import LOGO from '@/assets/images/logo.svg'

const Header = () => {
    return (
        <Navbar shouldHideOnScroll className='bg-[#ffffff05]'>
            <NavbarBrand>
                <Image src={LOGO} width={30} alt='The Cyber Avengers Logo'  />
                <p className='text-lg font-medium ml-3'>{APP_NAME}</p>
            </NavbarBrand>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <Link href={social.instagram}>
                        <Button isIconOnly color="default" variant="light" aria-label="Take a photo">
                            <Instagram />
                        </Button>
                    </Link>
                    <Link href={social.linkedin}>
                        <Button isIconOnly color="default" variant="light" aria-label="Take a photo">
                            <Linkedin />
                        </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header