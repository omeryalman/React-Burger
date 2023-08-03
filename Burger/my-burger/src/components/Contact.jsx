import React from 'react'
import '../styles/Contact.css'
export const Contact = () => {
  return (
    <div className='contact'>
     
      <div className='leftSide' ></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form>
          <label> İsim Soyisim</label>
          <input type='text' ></input>
          <label>Email</label>
          <input type='email'></input>
          <label>Mesajınız</label>
          <textarea rows={6} name='message'>
          </textarea>
        </form>
      </div>
    </div>
  )
}
