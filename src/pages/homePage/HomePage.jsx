import React, { useCallback, useContext, createContext } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { loadFull } from "tsparticles";
import { Particle } from '../../components';
import {HomePageContext}from '.././../contaxt'
import {hompageOptions} from '../../data/particles'
import { UserSection } from '../../pagesComponent';

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
                    <Particle option={hompageOptions} />
                <ContentWrapper>
               <UserSection/>
                </ContentWrapper>
            </SectionWrapper>
        </HomePageContext.Provider>
    )
}

export default HomePage

