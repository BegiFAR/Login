import React from 'react'



function Register() {
    return (
             <div className='  '>
                {/* REGISTER */}
                <form className='  '>
                        <center >
                                <input className='w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white' type="email" placeholder='Enter your username' required/>
                        </center>
                        <center>
                                <input className='w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white' type="email" placeholder='Enter your email' required/>
                        </center>
                        <center>
                                <input className=' w-80 p-3 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white'  type="password" placeholder='Enter your password' required/>
                                <input className=' w-80 p-3 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white'  type="password" placeholder='Confirm Password' required/>
                        </center>
                        <center className=' pt-8'>
                                <input type="checkbox" className='hover:scale-125'/><span className='text-white text-md px-3 '>I agree to <span className='text-blue-400'>terms & conditions</span></span>
                        </center>
                        <center> 
                                <button className='animate-bounce hover:animate-none w-40 relative sm:bottom-14 top-10 p-2 px-6 bg-transparent border border-zinc-400 outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300'  type="submit" value='Submit'>Register</button>
                        </center>  
                </form>
            </div>   

    )
}

export default Register
