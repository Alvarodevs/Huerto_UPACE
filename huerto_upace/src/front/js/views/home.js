import React from 'react'
import { AboutUs } from '../components/About';
import { Gallery } from '../components/Gallery';

import { Presentation } from '../components/Presentation';
import { Products } from '../components/ProductCard';


export const Home = () => {

    return(
        <>
            <Presentation/>
            <Products/>
            {/*<AboutUs/>
            <Gallery/> */}
        </>
    )

};