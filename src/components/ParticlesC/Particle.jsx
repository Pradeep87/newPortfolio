import React, { useContext } from 'react'
import Particles from "react-tsparticles";
import { HomePageContext } from '../../contaxt'

const Particle = ({ option }) => {
    const { particlesInit } = useContext(HomePageContext)

    return (
        <div className='particles-display'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                // loaded={particlesLoaded}
                options={option}
            />
        </div>

    )
}

export default Particle

