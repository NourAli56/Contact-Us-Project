import React, { useState } from 'react'
import call from '../../assets/Icons/call.svg'
import sms from '../../assets/Icons/sms.svg'
import styles from './layout.module.css'
import { Link } from 'react-router-dom'
import ContactUsPopUp from '../general/contact-us-popup'

export default function Footer() {
    const [open, setOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('home');
    const links = [
        {
            id: 1,
            name: "HOME",
            sectionId: "home"
        },
        {
            id: 2,
            name: "ADS",
            sectionId: "ads"
        },
        {
            id: 3,
            name: "PRODUCTS",
            sectionId: "products"
        },
    ];

    const handleLinkClick = (sectionId) => {
        setActiveLink(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={`${styles.footer} d-flex items-start gap-10`} >
            <div className={styles.oneBox} >
                <p className={styles.titleFooter} >LOGO</p>
                <p className={styles.aboutFooter}>Lorem ipsum dolor sit amet consectetur. Fermentum tellus amet egestas eu nisi ultricies euismod varius Lorem ipsum dolor sit amet consectetur. Fermentum tellus amet egestas eu nisi ultricies euismod varius.
                    Lorem ipsum dolor sit amet consectetur. Fermentum tellus amet egestas eu nis
                </p>
                <br></br>
            </div>
            <div className={styles.oneBox}>
                <p className={styles.titleFooter} >Quick Links</p>

                <div className={styles.linksFooter} >
                    {links.map((link) => (
                        <span
                            key={link.id}
                            onClick={() => handleLinkClick(link.sectionId)}
                            className={`d-flex items-center gap-10 cursor-pointer ${activeLink === link.sectionId ? styles.activeLink : styles.spanLink}`}
                        >
                            {link.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.oneBox}>
                <p className={styles.titleFooter} >Additional links</p>
                <div className={styles.linksFooter} >
                    <Link to='/' >Privacy policy</Link>
                    <Link to='/' >Terms of Use</Link>
                </div>
            </div>
            <div className={styles.oneBox} >
                <p className={styles.titleFooter} >Contact Us</p>
                <div className='d-flex items-center gap-10'>
                    <img src={call} />
                    <span className='text-white'>(+45)54455487845</span>
                </div>
                <br></br>
                <div className='d-flex items-center gap-10'>
                    <img src={sms} />
                    <span className='text-white' >info-comany.com</span>
                </div>
                <br></br>
                <buton onClick={() => setOpen(true)} className="btnCss1" >Contact Us</buton>
            </div>
            {
                open && <ContactUsPopUp open={open} setOpen={setOpen} />
            }
        </div>
    )
}
