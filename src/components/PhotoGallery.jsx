import React, { useState } from 'react'
import { photos } from '../utils'
import Modal from './modal'

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(-1)

  return (
    <section className='photos h-screen p-5 flex flex-col items-center gap-5 bg-gradient-to-b from-blue-300 to-blue-200 text-white pb-30'>
        <h1 className='heading text-teal-500 bg-white px-10 rounded-lg md:rounded-[5rem]'><i className='fa-solid fa-photo-film'></i> Photo Gallery!</h1>
        <div className='grid text-black grid-cols-2 md:gap-10 md:grid-cols-4 items-center justify-center gap-5'>
            {photos.map((option, optionIndex)=>{
                return(
                    <button key={optionIndex} onClick={()=>{(setSelectedPhoto(optionIndex)),(console.log('Clicked'))}} 
                    className='ImageCard bg-white p-2 pb-10 lg:p-4 lg:pb-15 flex flex-col items-center justify-center gap-5'>
                        <img src={option.src} alt="" className=''/>
                        <p>{option.name}</p>            
                    </button>
                )
            })}
        </div>
        {selectedPhoto!=-1 ? (
            <Modal handleCloseModal={()=>{setSelectedPhoto(-1)}}>
                {console.log('Entered Modal')}
                <div className='pt-5 px-20 flex flex-col gap-5 items-center bg-gradient-to-tl p-10 from-blue-300 to-blue-100 max-w-[700px]'>
                    <img src={photos[selectedPhoto].src} alt=""  className='w-[450px]'/>
                    <p className='text-center'>{photos[selectedPhoto].desc}</p>  
                </div>
            </Modal>
        ) : ('')}
    </section>
  )
}
