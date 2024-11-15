import React, { useEffect } from 'react'
import styles from './products.module.css'
import Titles from '../general/titles'
import { useDispatch } from 'react-redux'
import { loadProducts } from '../../redux/actions/ActionProducts'
import { useSelector } from 'react-redux'
import Card from '../general/card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../general/Settings'
import CardProduct from '../general/card/CardProduct'

export default function Products() {
    let dispatch = useDispatch()
    const { products, loadingProducts } = useSelector(state => state.productsState)
    useEffect(() => {
        dispatch(loadProducts())
    }, [])
    return (
        <div className={styles.products} id="products" >
            <Titles colorTitle='white' title='Products' />
            <p className={styles.description} >Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus. Auctor aenean ut euismod at integer id nulla cursus te</p>
            <Slider {...settings} className='silder11' >
                {
                    products?.map((product) => {
                        return (
                            <div className='oneSlide' >
                                <CardProduct datum={product} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}
