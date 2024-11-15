import React from 'react'
import styles from './card.module.css'

export default function CardProduct({ datum }) {
    return (
        <div className={styles.oneCardProduct} key={datum?.id} >
            <div className='d-flex items-center justify-between' >
                <p className={styles.name} >{datum?.name}</p>
                <p className={styles.price} >{datum?.price}</p>
            </div>
            <p className={styles.desc} >{datum?.description}</p>
            <div style={{margin: '20px 0px'}} className='d-flex items-center justify-between' >
                <p className={styles.categoryKey} >Category</p>
                <p className={styles.categoryValue} >( {datum?.categories?.name} )</p>
            </div>
            <p className={styles.desc} >{datum?.categories?.description}</p>
        </div>
    )
}
