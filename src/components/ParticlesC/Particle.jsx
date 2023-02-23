import React from 'react'
import Particles from "react-tsparticles";

const Particle = ({ option,particlesInit }) => {

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

