import React from 'react'



function Login() {
    return (  
            <div className=''>
                {/* LOGIN */}
                <form className="space-y-5">
                        <center>
                                <input className='w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white' type="email" placeholder='Enter your username/email' required/>
                        </center>
                        <center>
                                <input className=' w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white'   type="password" placeholder='Enter your password' required/>
                        </center>
                        <center className='absolute pl-4'>
                                <input type="checkbox" className='hover:scale-125'/><span className='text-white text-md px-3'>Remember Password</span>
                        </center>
                        <center className='absolute pt-8 pl-4'>
                                <a className='text-md  left-10 bottom-7 text-white  hover:text-bold hover:scale-105 border-spacing-5 duration-300 ' href="#">Forgot Password?</a>
                        </center>
                        <center> 
                                <button className='animate-bounce hover:animate-none w-40 relative sm:bottom-14 top-20 p-2 px-6 bg-transparent border border-zinc-400 outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300'  type="submit" value='Submit'>Login</button>
                        </center>  
                </form>
            </div>
    )
}

export default Login
