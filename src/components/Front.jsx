import React, { useState } from 'react'
import LoginForm from "./LoginForm"
import RegForm from './RegForm';



function Front () {

    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);+
 
    // function movefunction(){
    //     document.getElementById(register).style.transform="translateX(100px)";
    //     document.getElementById(register).style.transition="all 1s";
    // }

        const loginForm = document.querySelector("form.sulod");
      const signupForm = document.querySelector("form.buhat");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");   

      signupBtn.onclick = (() => {
          loginForm.style.marginLeft = "50%"
          
        
      });
      loginBtn.onclick = (() => {
          loginForm.style.marginLeft = "0%"
      });

    return (

        
        <div className="margin-auto">
            <div className="rounded-3xl backdrop-filter backdrop-blur-sm bg-white/10 shadow-red-700/40 shadow-2xl w-box h-box overflow-hidden">
                    
                {/* <div className="flex hl-h w-full hl-margin justify-between hl-border rounded-md ">
                    
                    <button id="login" className='atubangan text-black z-100 text-[30px] font-bold cursor-pointer' >Login</button>
                    <button  id="reg"  className=' atubangan  text-black text-[30px] font-bold cursor-pointer'>Signup</button>
                    <div className="left-8 box absolute ilalum bg-white  h-hl w-hl rounded-3xl"></div>

                </div> */}
                <div className="relative flex hl-h w-full hl-margin justify-between hl-border rounded-md top-[30px] ">
                        <input type="radio" name="slider" id="login"  />
                        <input type="radio" name="slider" id="signup"  />
                        <label for="login" className="login text-white atubangan h-full w-full text-[30px] font-medium text-center leading-[48px] cursor-pointer ">Login</label>
                        <label for="signup" className="signup text-black atubangan h-full w-full text-[30px] pr-10 font-medium text-center leading-[48px] cursor-pointer ">Signup</label>
                        <div className="highlight absolute h-full w-6/12 left-0 ilalum rounded-md bg-gradient-to-r from-rose-900 to-gray-800 peer-checked:left-2/16 "></div>
                    </div>
                
                <div  className=" flex absolute gap-5 right-[15px] pt-[50px] h-full overflow-hidden">
                         {/* REGISTER */}
                    <form  className='  sulod buhatE '>
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
                                <button className='w-40 active:translate-y-2 shadow-xl shadow-red-800/50 relative sm:bottom-14 top-8 p-2 px-6 bg-transparent border border-zinc-400 outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300'  type="submit" value='Submit'>Register</button>
                        </center>  
                    </form>
                    {/* LOGIN */}
                    <form id="login" className="buhat  sulodE space-y-5 pl-3 ">
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
                                <button className='active:translate-y-2 shadow-xl shadow-red-800/50 w-40 relative sm:bottom-14 top-20 p-2 px-6 bg-transparent border border-zinc-400 outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300'  type="submit" value='Submit'>Login</button>
                        </center>  
                    </form>
                </div>
            </div>
        </div>
        
    )
    
}

export default Front

