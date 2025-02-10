import { useState } from 'react'

import Hero from './components/Hero'
import Gift from './components/Gift'
import Songs from './components/Songs'
import PhotoGallery from './components/PhotoGallery'
import Places from './components/Places'
import Games from './components/Games'
import Modal from './components/Modal'


function App() {
  const [page, setPage] = useState('Hero')
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [incorrect, setIncorrect] = useState(false)

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
      {isAuthenticated && (<section className='app flex flex-col justify-between'>
        {(page === 'Hero')&&(<Hero />)}
        {(page === 'Games')&&(<Games page={page} setPage = {setPage} />)}
        {(page === 'Gift')&&(<Gift />)}
        {(page === 'Songs')&&(<Songs />)}
        {(page === 'PhotoGallery')&&(<PhotoGallery />)}
        {(page === 'Places')&&(<Places />)}
        {footer}
      </section>)}
      {!isAuthenticated&&(
        <Modal>
          <div className='bg-gradient-to-t from-white to-pink-200 flex flex-col gap-5 justify-center p-10'>
            <h1 className='heading'>Login</h1>
            <p>Login to your account: </p>
            <input id='Email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} className='p-2 border-2 border-black rounded-lg'/>
            <input id='Password' type="password" placeholder='**********' onChange={(e)=>{setPassword(e.target.value)}} className='p-2 border-2 border-black rounded-lg'/>
            <button onClick={()=>{
              (email==="greatananyapandey@gmail.com" && password==="ILoveNishant") ? (setIsAuthenticated(true)) :(setIncorrect(true))
            }}
            className='my-3  text-sm border-2 border-black font-light text-black px-5 rounded py-1 w-fit mx-auto hover:text-white hover:bg-black hoevr:transition duration-1000'>
              Submit
            </button>
            {incorrect&&(<p className='font-semibold text-red-600'>Incorrect Email/Password!!!</p>)}
          </div>
        </Modal>
      )}
    </>
  )
}

export default App
