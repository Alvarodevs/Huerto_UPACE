import React from 'react'
import { Collaborators } from './Collaborators'

export const Footer = () => {

    return (
        <>
        <div className="footer">
            <div className="footer-no-collaborators d-flex flex-wrap justify-content-center">
                <div className="collaborate">
                    <div className="image-container-collaboration">
                        <h5>Hazte voluntari@</h5>
                        <img src="./images/voluntario.png" alt="Hazte voluntario" />
                    </div>
                    <div className="image-container-collaboration mx-3">
                        <h5>Hazte <br/> soci@</h5>
                        <img src="./images/socio.png" alt="Hazte socio" />
                    </div>
                    <div className="image-container-collaboration">
                        <h5>Haz un donativo</h5>
                        <img src="./images/donativo.png" alt="Haz un donativo" />
                    </div>
                </div>

            <div className="ocupacional-contact" id="ocupacional-contact">
                    <h3>CONTACTO DE OCUPACIONAL PARA PEDIDOS</h3>
                    <h4>Direccion: C.O. "El parque" Camino de los Arcos C/Aguila s/n. 11510 Puerto Real(Cádiz) Tfno: 956.980.921</h4>
                </div>

                
                <div className="upace-contact">
                    <div className="d-flex ">
                        <div className="upace-contact-title">
                            <h3>UPACE</h3>
                            <h4>Av. Al-Andalus 2-A 11100 San Fernando (Cádiz) Tfno: 956.897.353</h4>
                        </div>
                        <div className="RRSS-container">
                    <a href="https://www.facebook.com/UPACE-San-Fernando-480256728682290/" target="_blank" rel="noreferrer">
                        <img src="./images/facebook-logo.png" alt="Upace facebook" />
                    </a>
                    <a href="https://twitter.com/upacesanfdo?lang=es" target="_blank" rel="noreferrer">
                        <img src="./images/twitter-logo.ico" alt="Haz un donativo" />
                    </a>
                </div>
                    </div>
                </div>
            </div>
            <div>
                <Collaborators/>
            </div>
        </div>
        
        </>
    );
};