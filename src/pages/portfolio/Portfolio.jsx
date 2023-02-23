import React, { useCallback } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { Particle } from '../../components'
import { hompageOptions } from '../../data/particles'
import { loadFull } from "tsparticles";

const Portfolio = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particle option={hompageOptions} particlesInit={particlesInit} />
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