import React, { useCallback } from 'react'
import { SectionWrapper, ContentWrapper } from '../../layout'
import { Particle } from '../../components'
import { portfolioOptions } from '../../data/particles'
import { loadPolygonPath } from "tsparticles-path-polygon";
import { loadFull } from "tsparticles";
import {PortfolioSection,Skills}from '../../pagesComponent'

const ContactMe = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadPolygonPath(engine);
        await loadFull(engine);
      }, []);
  return (
    <>
    <Particle option={portfolioOptions} particlesInit={particlesInit} />
    <SectionWrapper>
      <ContentWrapper>
      
      </ContentWrapper>
    </SectionWrapper>
  </>
  )
}

export default ContactMe