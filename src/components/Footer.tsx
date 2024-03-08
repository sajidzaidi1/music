import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:-px-6 lg:p-8">
                <div>
                    <h1 className='font-bold text-orange-600 text-2xl'>About Us</h1>
                    <p>
                        Music School is premier Institution dedicatd to teaching the Art & Science of music. We nurture telelnt from the ground up fostering a vibrant community of musician.
                    </p></div>
                <div>
                    <h2 className='font-bold text-orange-600 text-2xl'>Quick Link</h2>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Contact Us</li>

                </div>
                <div>
                    <h2 className='font-bold text-orange-600 text-2xl'>Follow Us</h2>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Twetter X</li>

                </div>
                <div>
                    <h2 className='font-bold text-orange-600 text-2xl'>Conatct Us</h2>
                    F-98/2 P.N.A.D Mairpur Hub River Road Karachi P.O # 75760
                    Cell # (+92-307-2206992) (+92-310-2111487)
                    sajidhussainzaidi1@gmail.com


                </div>
            </div>
            <p className='flex justify-center mx-auto py-8 text-sm '>Copy Right 2024 Music School. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer