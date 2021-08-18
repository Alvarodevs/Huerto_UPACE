import React from 'react'
import { ImageCard } from './GalleryImageCard';

export const Gallery = () => {

  
    return(
        <div >
            <h3 className="text-center pt-4">Galería de imágenes</h3>
            <div className="gallery-container">
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
            </div>
        </div>
    );
};