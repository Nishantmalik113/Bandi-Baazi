import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'


export default function Hero() {

  function handleNo(){
    const button = document.getElementById('btn')
        button.style.left = `${Math.ceil(Math.random() * 90)}%`
        button.style.top = `${Math.ceil(Math.random() * 90)}%`
    }

  const [sadEmoji,setSadEmoji] = useState(false)
  const [ClickedYes, setClickedYes] = useState(false)       

  return (
    <section className='hero min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-blue to-blue-50 pb-30 md:pb-0'>

        <div className='hero-1'>
            <img src="/hero-bg1.png" alt="" className='mx-auto 
            w-full max-w-[70.4vh] mt-5' />
        </div>
        <div className='hero2 flex flex-col justify-center items-center'>
            <h1 className='heading font-semibold'>Happy Birthday!</h1>
            <p className='text-xl font-semibold'>Welcome to <abbr 
                title="Anant" className='hover:cursor-pointer'>Infinity</abbr> Land:</p>
            <div className=' flex h-full flex-col items-center justify-center gap-[1rem] mx-auto'>
                {!sadEmoji ? (<img src="../hug.gif" alt="" className=' w-[350px] rounded-xl' />) : ( <img src="../sad.gif" alt="" className=' w-[350px]'/> )}
                {ClickedYes && (<Modal handleCloseModal={()=>{setClickedYes(false)}}>
                    <p className='text-white'>Well Done</p>
                    <img src="../done.gif" alt="" className='w-[400px]'/>
                    <p className='text-white'>Now You Can explore the whole website.</p>
                </Modal>)}
                {sadEmoji &&(<p>Please Think Again 🥹</p>)}
                <p className='text-center text-lg'>Would you like to go on a date with me on <abbr 
                title="Chennai" className='hover:cursor-pointer'>15th Feb 2025!</abbr></p>
                <div className='flex gap-10'>
                    <button className='button-hero' onClick={()=>{setSadEmoji(false), setClickedYes(true)}} >Yes</button>
                    <button id='btn' onMouseOver={handleNo} onClick={()=>{setSadEmoji(true)}} 
                    className='button-hero btn'>No</button>
                </div>
                
            </div>
        </div>
       

    </section>

  )
}
