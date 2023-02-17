import React, { useCallback, useContext, createContext } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { loadFull } from "tsparticles";
import { Particle } from '../../components';
import {HomePageContext}from '.././../contaxt'
import {hompageOptions} from '../../data/particles'


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
                    <Particle option={hompageOptions} />
                </ContentWrapper>
            </SectionWrapper>
        </HomePageContext.Provider>
    )
}

export default HomePage

