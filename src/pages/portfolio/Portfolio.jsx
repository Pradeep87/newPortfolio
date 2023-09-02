import { SectionWrapper } from "../../layout"
import { PortfolioSection, Skills, ContactSection } from "../../pagesComponent"
const Portfolio = () => {
  return (<>
    <SectionWrapper>
      <PortfolioSection />
    </SectionWrapper>
    <SectionWrapper>
      <Skills />
    </SectionWrapper>
    <SectionWrapper>
      <ContactSection />
    </SectionWrapper>
  </>
  )
}

export default Portfolio