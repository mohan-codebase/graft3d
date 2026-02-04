import React from 'react'
import Button from '../ui/Button'

const NavTopBar = () => {
    return (
        <div className='w-full bg-primary text-white py-3.5 px-4 text-[11px] font-medium tracking-wide '>
            <div className='max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-center lg:justify-center items-center gap-2 lg:gap-6'>

                {/* Contact */}
                {/* Contact */}
                <a href="tel:+919840478347" className='flex items-center gap-2 text-[14px] font-bold hover:underline'>
                    <span>Contact : +91-98404 78347</span>
                </a>

                <div className='hidden lg:block h-5 w-[1px] bg-white/100'></div>

                {/* Email */}
                {/* Email */}
                <a href="mailto:sales@graft3d.com" className='flex items-center gap-2 text-[14px] font-bold hover:underline'>
                    <span>Email: sales@graft3d.com</span>
                </a>

                <div className='hidden lg:block h-5 w-[1px] bg-white/100'></div>

                {/* Live Online Button */}
                <button className='bg-white text-[#1660cf] text-[14px] font-bold  px-3 py-1 rounded font-semibold hover:bg-opacity-90 transition-colors'>
                    Meet us Live Online
                </button>


                {/* Work Hours */}
                <div className='flex items-center gap-2 lg:ml-4 text-[14px] font-bold '>
                    <span>Work Hours : Mon to Sat : 09:30- 18:30</span>
                </div>

                {/* Cart Icon */}
                <div className='relative lg:ml-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className='absolute -top-1.5 -right-1.5 bg-white text-[#1660cf] text-[9px] font-bold h-3.5 w-3.5 flex items-center justify-center rounded-sm'>
                        1
                    </span>
                </div>

            </div>
        </div>
    )
}

export default NavTopBar