import React, { useCallback } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { Particle } from '../../components'
import { portfolioOptions } from '../../data/particles'
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";



const Portfolio = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  return (
    <>
      <Particle option={portfolioOptions} particlesInit={particlesInit} />
      <SectionWrapper>
        <ContentWrapper>
          <div>Portfolio</div>
          <h1>hola</h1>
        </ContentWrapper>
      </SectionWrapper>
    </>
  )
}

export default Portfolio