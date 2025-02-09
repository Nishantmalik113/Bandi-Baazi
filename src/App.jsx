import { useState } from 'react'

import Hero from './components/Hero'
import Games from './components/games'
import Gift from './components/Gift'
import Songs from './components/Songs'
import PhotoGallery from './components/PhotoGallery'
import Places from './components/Places'
import Modal from './components/modal'


function App() {
  const [page, setPage] = useState('Hero')

  const footer =(
    <div className='footer grid grid-cols-5 gap-1 md:gap-50  md:px-20 justify-between'>
      <button onClick={()=>{
        setPage('Games')
      }} 
      className={(page==='Games' ? 'button-selected': 'button-pg')}>
          <i className='fa-solid fa-gamepad'></i>
          <p>Game</p>
      </button>
      <button onClick={()=>{
        setPage('Songs')
      }} 
      className={(page==='Songs' ? 'button-selected': 'button-pg')}>
          <i className='fa-solid fa-music'></i>
          <p>Songs</p>
      </button>
      <button onClick={()=>{
        setPage('Gift')
      }} 
      className={(page==='Gift' ? 'button-selected': 'button-pg')}>
          <i className='fa-solid fa-gift'></i>
          <p>Gifts</p>
      </button>
      <button onClick={()=>{
        setPage('PhotoGallery')
      }} 
      className={(page==='PhotoGallery' ? 'button-selected': 'button-pg')}>
          <i className='fa-solid fa-photo-film'></i>
          <p>Photos</p>
      </button>
      <button onClick={()=>{
        setPage('Places')
      }} 
      className={(page==='Places' ? 'button-selected': 'button-pg')}>
          <i className='fa-solid fa-map'></i>
          <p>Places</p>
      </button>
    </div>
  )

  return (
      <section className='app flex flex-col justify-between'>
        {(page === 'Hero')&&(<Hero />)}
        {(page === 'Games')&&(<Games />)}
        {(page === 'Gift')&&(<Gift />)}
        {(page === 'Songs')&&(<Songs />)}
        {(page === 'PhotoGallery')&&(<PhotoGallery />)}
        {(page === 'Places')&&(<Places />)}
        {footer}
      </section>
  )
}

export default App
