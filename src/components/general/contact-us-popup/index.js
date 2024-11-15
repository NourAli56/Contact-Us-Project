import React from 'react'
import styles from './contactus.module.css'
import { Modal as RModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function ContactUsPopUp({open,setOpen}) {
    return (
        <RModal
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            center
            classNames={{
                modal: `${styles.popup}`,
            }}
            focusTrapped={false}
        >
            <div className={styles.contactPopup} >
                <p className={styles.title} >Contact with us</p>
                <textarea />
                <button className="btnCss1" >Send</button>
            </div>
        </RModal>
    )
}
