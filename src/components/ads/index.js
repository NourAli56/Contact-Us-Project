import React, { useEffect, useState } from 'react'
import styles from './ads.module.css'
import { useDispatch } from 'react-redux'
import { loadAds } from '../../redux/actions/ActionAds'
import ads1 from '../../assets/Images/ads1.jfif'
import ads2 from '../../assets/Images/ads2.jfif'
import ads3 from '../../assets/Images/ads3.jfif'
import { useSelector } from 'react-redux'
import Titles from '../general/titles'
import Card from '../general/card'

export default function Ads() {
    const { ads, loadingAds } = useSelector(state => state.adsState)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadAds())
    }, [])
    const [customAds, setCustomAds] = useState([])
    useEffect(() => {
        if (ads?.length > 0) {
            const updatedAds = ads.map(ad => ({
                ...ad,
                image: ads1,
            }));
            const extraAds = [
                {
                    id: 2,
                    content: "Lorem ipsum dolor sit amet consectetur.",
                    image: ads2
                },
                {
                    id: 3,
                    content: "Lorem ipsum dolor sit amet consectetur.",
                    image: ads3
                }
            ]
            const addExtraToAds = [...updatedAds, ...extraAds]
            setCustomAds(addExtraToAds);
        }
    }, [ads]);

    return (
        <div className={styles.ads} id="ads" >
            <Titles title='Ads' />
            <p className={styles.description} >Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus. Auctor aenean ut euismod at integer id nulla cursus te</p>
            <div className={styles.allAds} >
                {
                    customAds?.map((ad) => (
                        <Card datum={ad} />
                    ))
                }
            </div>
        </div>
    )
}
