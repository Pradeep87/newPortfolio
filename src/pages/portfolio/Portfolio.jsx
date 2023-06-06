import React, { useCallback } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { Particle } from '../../components'
import { maskOptions } from '../../data/particles'
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { loadFull } from "tsparticles";
import { PortfolioSection, Skills, MyEducation,ContactSection } from '../../pagesComponent'



const Portfolio = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <>
      <Particle option={maskOptions} particlesInit={particlesInit} />
      <SectionWrapper>
        <ContentWrapper>
          <PortfolioSection />
          <Skills />
          <MyEducation />
          <ContactSection/>
        </ContentWrapper>
      </SectionWrapper>
    </>
  )
}

export default Portfolio


