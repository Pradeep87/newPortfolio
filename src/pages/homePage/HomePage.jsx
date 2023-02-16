import React, { useCallback, useContext, createContext } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";




const HomePageContext = createContext()

const HomePage = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const contextData = {
        particlesInit
    }

    return (
        <HomePageContext.Provider value={contextData} >
            <SectionWrapper>
                <ContentWrapper>
                    <ParticlesCom />
                </ContentWrapper>
            </SectionWrapper>
        </HomePageContext.Provider>
    )
}

export default HomePage


const ParticlesCom = () => {
    const { particlesInit } = useContext(HomePageContext)

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#034f84",
                    },
                },
                fpsLimit: 180,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 80,
                        },
                        grab: {
                            distance: 300,
                            duration: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 200,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

