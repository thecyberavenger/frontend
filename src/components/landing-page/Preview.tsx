import React from 'react'
import Image from 'next/image'
import Logo from "@/assets/images/logo.svg"
import {  Plus } from "lucide-react";
import WritingPageScreenshot from "@/assets/images/screenshot.png"

const title: string = "Automating Payload Generatio...";

const  Preview = () => {
    return (
        <div className="border border-slate-500/10 rounded-lg overflow-hidden mt-14">
            <div className="bg-slate-800 w-full h-9 flex justify-between p-1">
                <div className="bg-slate-600 h-full w-fit flex items-center pr-1 pl-2 leading-none rounded-tr-md rounded-tl-md">
                    <Image src={Logo} width={13} alt="Logo" />
                    <span className="text-xs mr-1 ml-2">{title}</span>
                    <span className="rotate-45"><Plus size={15} /></span>
                </div>
                <div className="flex space-x-1 items-center h-full pr-3">
                    <div className="h-[10px] w-[10px] bg-blue-500 rounded-full"></div>
                    <div className="h-[10px] w-[10px] bg-yellow-500 rounded-full"></div>
                    <div className="h-[10px] w-[10px] bg-red-500 rounded-full"></div>
                </div>
            </div>
            <figure>
                <Image src={WritingPageScreenshot} style={{ "width": "full" }} alt="Screenshot of Writing Page" />
            </figure>
        </div>
    )
}

export default Preview