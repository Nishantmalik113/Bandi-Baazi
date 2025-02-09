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
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false)


  function handleIncorrect(){
    let res = document.getElementById('result')
    res.innerText = "Incorrect Email/Password !!!"
  }

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
    <>
      {isAuthenticated &&(<section className='app flex flex-col justify-between'>
        {(page === 'Hero')&&(<Hero />)}
        {(page === 'Games')&&(<Games />)}
        {(page === 'Gift')&&(<Gift />)}
        {(page === 'Songs')&&(<Songs />)}
        {(page === 'PhotoGallery')&&(<PhotoGallery />)}
        {(page === 'Places')&&(<Places />)}
        {footer}
      </section>)}
      {!isAuthenticated && (
        <Modal>
          <div className='flex flex-col gap-3 bg-white p-10'>
          <h2 className='pt-0 text-xl font-semibold'>Login</h2>
          <p>Login to your account</p>
          <input name='Email' className='border-black border-1 rounded-lg p-2' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
          <input name='Password' className='border-black border-1 rounded-lg p-2' type="password" placeholder='**********' onChange={(e)=>{setPassword(e.target.value)}} />
          <button onClick={()=>{
            (email==='greatananyapandey@gmail.com') && (password==='ILoveNishant') ? (setIsAuthenticated(true)) : (handleIncorrect())
          }}
          className='my-3  text-sm border-2 border-black text-black font-light px-5 rounded py-1 w-fit mx-auto hover:text-white hover:bg-black'>Submit</button>
          <p id='result' className='text-[red]'></p>
      </div>
        </Modal>
      )}
    </>
  )
}

export default App
