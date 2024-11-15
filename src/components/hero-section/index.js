import React, { useState } from 'react'
import styles from './heroSection.module.css'
import Navbar from '../layout/Navbar'
import ContactUsPopUp from '../general/contact-us-popup'

export default function HeroSection() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.cover} relative`} id='home' >
      <br></br>
      <Navbar />
      <div className={styles.content} >
        <p className={styles.title} >Welcome to </p>
        <p className={styles.description} >Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus. Auctor aenean ut euismod at integer id nulla cursus te</p>
        <button style={{marginTop: "25px"}} className='btnCss' onClick={()=> setOpen(true)} >Contact Us </button>
      </div>
      {
        open&& <ContactUsPopUp open={open} setOpen={setOpen} />
      }
    </div>
  )
}
