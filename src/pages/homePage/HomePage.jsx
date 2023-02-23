import React, { useCallback} from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { loadFull } from "tsparticles";
import { Particle } from '../../components';
import { hompageOptions } from '../../data/particles'
import { UserSection } from '../../pagesComponent';

const HomePage = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);



    return (
        < >
            <Particle option={hompageOptions} particlesInit={particlesInit} />
            <SectionWrapper>
                <ContentWrapper>
                    <UserSection />
                </ContentWrapper>
            </SectionWrapper>
        </>
    )
}

export default HomePage

