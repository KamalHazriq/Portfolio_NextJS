import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full  " fill="purple" />
                <Spotlight className="left-80 top-28  h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Looking For Internship Opportunies
                    </h2>

                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words="Hi, I'm Kamal"
                    />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Aspiring Software Developer from Gombak, Selangor.
                    </p>

                    <a href="/KAMAL_RESUME.pdf" target="_blank" rel="noopener noreferrer">
                        <MagicButton
                            title='See my Resume'
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>



                    <div className="flex items-center md:gap-3 gap-6">
                        {socialMedia.map((profile) => (
                            <a
                                key={profile.id}
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-5"
                            >
                                <img src={profile.img} alt={profile.id} width={20} height={20} />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero