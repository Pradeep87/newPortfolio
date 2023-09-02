import React, { useCallback } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { loadFull } from "tsparticles";
import { Particle } from '../../components';
import { hompageOptions } from '../../data/particles'
import { UserSection, Skills, PortfolioSection, ContactSection,MyEducation } from '../../pagesComponent';

const HomePage = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);



    return (
        < >
            <SectionWrapper>
                <ContentWrapper>
                    <UserSection />
                    <PortfolioSection />
                    <Skills />
                    <MyEducation/>
                    <ContactSection />
                </ContentWrapper>
            </SectionWrapper>
        </>
    )
}

export default HomePage

