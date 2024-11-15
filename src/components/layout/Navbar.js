import { Link } from 'react-router-dom'
import styles from './layout.module.css'
import { useState } from 'react';

export default function Navbar() {
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
        <div className={` ${styles.navbar} d-flex items-center justify-between `}>
            <span className={styles.logo} >LOGO</span>
            <div className={` ${styles.links} d-flex items-center`}>
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
            <button className='btnCss' >Login</button>
        </div>
    );
}