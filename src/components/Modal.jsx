import React from 'react'
import ReactDom from 'react-dom'
import { Children } from 'react'

export default function Modal(props) {
  const {children, handleCloseModal} = props
  return ReactDom.createPortal(
    <section id='Modal' className='modal-container'>
      <button className='modal-underlay' onClick={handleCloseModal}/>
      <div className='modal-content items-center mb-20'>
        {children}
      </div>

    </section>,
    document.getElementById('portal')
  )
}
