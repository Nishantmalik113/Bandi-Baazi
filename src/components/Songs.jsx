import React, { useEffect, useRef, useState } from 'react'
import { songs } from '../utils'

export default function Songs() {
    
    let ScrollContainer = document.querySelector(".songs-grid")  
    const [playSong, setPlaySong] = useState(false)
    var [myAudio, setMyAudio] = useState(0)
    
    const [width, setWidth] = useState(0)
    const refContainer = useRef();
    useEffect(() => {
        if (refContainer.current) {
            setWidth(refContainer.current.offsetWidth + 16)
        }
    }, []);

    function handlePauseAudio() {
        let x = document.getElementById(myAudio)
        if(!playSong){
            return
        }
        else{
            
            console.log(x,myAudio)
            x.pause()
            setPlaySong(false)
        }
    }
    
    function handleClickAudio() {
        let x = document.getElementById(myAudio)
        if(!playSong){
            
            setPlaySong(true)
            console.log(myAudio)
            x.play()
        }
        else{
            
            console.log(x,myAudio)
            x.pause()
            setPlaySong(false)
        }
    }
  
    return (
    <section className='min-h-screen flex flex-col gap-4 items-center bg-gradient-to-t p-2 from-black to-zinc-900 text-white '>
        <div className='rounded-[1rem] bg-[#1F1F1F] w-full flex flex-col items-center p-5'>
            <h1 className='heading text-[#1ED760] px-10 bg-slate-100 rounded-lg md:rounded-[5rem] w-fit '><i class="fa-solid fa-headphones-simple"></i> Song Library!</h1>
        </div>
        <div className='mx-auto grid grid-cols-9 md:grid-cols-4 gap-5'>
            <div className='rounded-[1rem] bg-[#1F1F1F] flex flex-col items-center justify-center'>
                <button className='' onClick={()=>{
                    ScrollContainer.style.scrollBehavior = "smooth"
                    ScrollContainer.scrollLeft -= width
                    handlePauseAudio()
                    if(myAudio>0){setMyAudio(myAudio-=1)}
                }}>
                    <img className='w-[50px] md:max-w-[60px] bg-white rounded-4xl' src="../src/music/left-arrow.png" alt="" />

                </button>
            </div>
            <div className='col-span-7 md:col-span-2 rounded-[1rem] bg-[#1F1F1F] p-2'>
                <div ref={refContainer} className='songs-grid' id='songCard'>
                    {songs.map((option, optionIndex)=>{
                        return(
                                <button key={optionIndex}  onClick={handleClickAudio} className='mx-auto rounded-xl md:px-30 py-5 items-center 
                                jusity-center  flex flex-col gap-2 items-center text-black w-[285px] md:w-[550px]' style={{ background: `linear-gradient(to top , black, ${option.color} , ${option.color})`}}>
                                    <h3 className='text-xl font-semibold'>{option.name}</h3>
                                    <img className='songimg w-[250px] md:w-[320px] rounded-lg' src={option.image} alt="" />
                                    <p className='text-white'>{option.desc}</p>
                                    <audio id={optionIndex} src={option.src} controls className='w-[280px] md:w-[500px]'></audio>
                                </button>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col items-center justify-center rounded-[1rem] bg-[#1F1F1F]'>
                <button className='' onClick={()=>{
                    ScrollContainer.style.scrollBehavior = "smooth"
                    ScrollContainer.scrollLeft += width
                    handlePauseAudio()
                    if(myAudio<9){setMyAudio(myAudio+=1)}
                }}>
                    <img className='w-[50px] md:max-w-[60px] bg-white rounded-4xl' src="../src/music/right-arrow.png" alt="" />

                </button>
            </div>    
        </div>
    </section>
  )
}
