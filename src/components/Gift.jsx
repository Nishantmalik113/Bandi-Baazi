import React from 'react'


export default function Gift() {
  

  return (
    <div className='min-h-screen p-5 bg-gradient-to-b from-pink-300 to-pink-200 flex flex-col gap-10 md:gap-20 items-center pb-30 md:pb-0'>
      <h1 className='heading px-10 rounded-lg md:rounded-[5rem] bg-white text-purple-500'><i className='fa-solid fa-gift'></i> Gifts!</h1>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-4 items-center justify-center'>    
          <button className='scratchCard1' onClick={()=>{
            let x = document.getElementById('1')
            x.style.opacity=0
            x.style.transition='1s'
          }}>
            <img id='1' src="../gift/scratch.png" alt="" className='w-[350px] rounded-[30px]' /> 
          </button>
          <button className='scratchCard2' onClick={()=>{
            let x = document.getElementById('2')
            x.style.opacity=0
            x.style.transition='1s'
          }}>
            <img id='2' src="../gift/scratch.png" alt="" className='w-[350px] rounded-[30px]' />
          </button>
          <button className='scratchCard3' onClick={()=>{
            let x = document.getElementById('3')
            x.style.opacity=0
            x.style.transition='1s'
          }}>
            <img id='3' src="../gift/scratch.png" alt="" className='w-[350px] rounded-[30px]' />
          </button>
          <button className='scratchCard4' onClick={()=>{
            let x = document.getElementById('4')
            x.style.opacity=0
            x.style.transition='1s'
          }}>
            <img id='4' src="../gift/scratch.png" alt="" className='w-[350px] rounded-[30px]' />
          </button>
      </div>
    </div>
  )
}
