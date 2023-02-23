import React, { useCallback } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { Particle } from '../../components'
import { portfolioOptions } from '../../data/particles'
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";
import {portfoliobg}from '../../assets'


const Portfolio = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  return (
    <>
      <Particle option={portfolioOptions} particlesInit={particlesInit} />
      <SectionWrapper>
        <ContentWrapper>
         <img src={portfoliobg} alt="" />
        </ContentWrapper>
      </SectionWrapper>
    </>
  )
}

export default Portfolio