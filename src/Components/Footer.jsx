import React from 'react'

function Footer() {
    return (
        <div className='footer mt-10'>
            <p className='ml-10 text-white'>Questions? <button>Call 000-800-919-1694</button></p>
            
            <div className='flex py-10 justify-between text-white' >
                <div className='flex flex-col w-80 items-start m-10'>
                    <button href='#'>FAQ</button>
                    <button href='#'>Investor Relations</button>
                    <button href='#'>Privacy</button>
                    <button href='#'>Speed Test</button>
                </div>
                <div className='flex flex-col w-80 items-start m-10'>
                    <button href='#'>Help Center</button>
                    <button href='#'>Jobs</button>
                    <button href='#'>Cookies Refrences</button>
                    <button href='#'>Legal Notice</button>
                </div>
                <div className='flex flex-col w-80 items-start m-10'>
                    <button href='#'>Account</button>
                    <button href='#'>Ways TO Watch</button>
                    <button href='#'>Coorporate Information</button>
                    <button href='#'>Only On Netflix</button>
                </div>
                <div className='flex flex-col w-80 items-start m-10'>
                    <button href='#'>Media Center</button>
                    <button href='#'>Terms of Use</button>
                    <button href='#'>Contact Us</button>
                    <button href='#'>Social Media</button>
                </div>
            </div>
        </div>
    )
}

export default Footer