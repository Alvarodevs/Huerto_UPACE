import React from 'react'
import { AboutUs } from '../components/home/About';
import { Gallery } from '../components/home/Gallery';
import { Presentation } from '../components/home/Presentation';
import { Categories } from '../components/home/Categories';


export const Home = () => {

    return(
        <>
            <Presentation/>
            <Categories/>
            <div className="container-about-gallery">
                <AboutUs/>
                <Gallery/>
            </div>
        </>
    )

};