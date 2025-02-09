import React, { useState } from 'react'
import Modal from './modal'
import { pins } from '../utils'

export default function Places() {

  var [showInfo , setShowInfo]= useState(-1)

  return (
    <section className='places h-[90vh] flex flex-col p-5'>
      <h1 className='heading px-10 rounded-lg md:rounded-[5rem] bg-white w-fit text-slate-600'><i className='fa-solid fa-map'></i> Places!</h1>
      <button className='pin1' onClick={()=>{setShowInfo(0)}}>
      <abbr title="Pondi"><i className='fa-solid fa-location-dot text-red-700 
      text-3xl'></i></abbr>
      </button>
      <button className='pin2' onClick={()=>{setShowInfo(1)}}>
      <abbr title="chennai"><i className='fa-solid fa-location-dot text-red-700 
      text-3xl'></i></abbr>
      </button>
      <button className='pin3' onClick={()=>{setShowInfo(2)}}>
      <abbr title="Coorg"><i className='fa-solid fa-location-dot text-red-700 
      text-3xl'></i></abbr>
      </button>
      <button className='pin4' onClick={()=>{setShowInfo(3)}}>
      <abbr title="IIT Bombay"><i className='fa-solid fa-location-dot text-red-700 
      text-3xl'></i></abbr>
      </button>
      <button className='pin5' onClick={()=>{setShowInfo(4)}}>
      <abbr title="Banglore"><i className='fa-solid fa-location-dot text-red-700 
      text-3xl'></i></abbr>
      </button>
      <button className='pin6' onClick={()=>{setShowInfo(5)}}>
      <abbr title="Delhi"><i className='fa-solid fa-location-dot text-red-700 
      text-3xl'></i></abbr>
      </button>
      <button className='pin7' onClick={()=>{setShowInfo(6)}}>
      <abbr title="Lucknow"><i className='fa-solid fa-location-dot text-red-700 
      text-3xl'></i></abbr>
      </button>
      <button className='MainPin' onClick={()=>{setShowInfo(7)}}>
      <abbr title="VIT"><i className='fa-solid fa-location-dot text-red-700 
      text-3xl'></i></abbr>
      </button>
      {(showInfo != -1)&&
        (<Modal handleCloseModal={()=>{setShowInfo(-1)}}>
          <div className='bg-gradient-to-r p-10 from-gray-600 to-gray-400 flex flex-col gap-3 items-center'>
              <img className='w-[250px] md:w-[400px] rounded-lg' src={pins[showInfo].src} alt="" />
              <p className='text-xl'>{pins[showInfo].desc}</p>
              <button className='text-lg border-1 
              border-black p-3 text-white 
              bg-black hover:text-black hover:bg-transparent hover:transition-all duration-[800ms]'><a href={pins[showInfo].link}>Click To View Album</a></button>
          </div>   
        </Modal>)
      }
      
    </section>
  )
}
