import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS } from '@/constants'
import { link } from 'fs'


const Footer = () => {
    return (
        <section className='flexCenter mb-24'>
            <div className='border-2 border-red-500 padding-container max-container flex w-full flex-col gap-14'>
                <div className='border-2 border-blue-500 flex flex-col items-start justify-center gap-[10%] md:flex-row'>
                    <Link href={'/'} className='mb-10'>
                        <Image src={'hilink-logo.svg'} alt='logo' width={74} height={29} />
                    </Link>

                    <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                        {FOOTER_LINKS.map((columns) => (
                            <FooterColumn
                                key={columns.title}
                                title={columns.title}>
                                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                                    {columns.links.map((link) => (
                                        <Link key={link} href={link}>{link}</Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className='flex flex'></div>


                    </div>

                </div>
            </div>
        </section>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className='flex flex-col gap-5'>
            <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
            {children}
        </div>
    )
}

export default Footer