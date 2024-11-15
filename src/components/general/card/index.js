import React from 'react'
import styles from './card.module.css'

export default function Card({backgroundColor, datum }) {
    return (
        <div style={{backgroundColor: backgroundColor ? backgroundColor :"#0E121E"}} className={styles.oneCard} key={datum?.id} >
            <img src={datum?.image} />
            <i className='fa fa-arrow-circle-o-right' ></i>
            <p>{datum?.content}</p>
        </div>
    )
}
