import React, { useCallback } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { Particle } from '../../components'
import { maskOptions } from '../../data/particles'
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { loadFull } from "tsparticles";
import {PortfolioSection,Skills}from '../../pagesComponent'



const Portfolio = () => {
  const particlesInit = useCallback(async (engine) => {
    // await loadPolygonPath(engine);
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <>
      <Particle option={maskOptions} particlesInit={particlesInit} />
      <SectionWrapper>
        <ContentWrapper>
          <Skills/>
          <PortfolioSection/>
        </ContentWrapper>
      </SectionWrapper>
    </>
  )
}

export default Portfolio


