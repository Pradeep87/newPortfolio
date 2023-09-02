import {UserSection,PortfolioSection,MyEducation,Skills,ContactSection} from "../../pagesComponent/"
import { SectionWrapper } from '../../layout'



const HomePage = () => {
  return (<>
   <SectionWrapper>
      <UserSection />
    </SectionWrapper>
    <SectionWrapper>
      <PortfolioSection/>
    </SectionWrapper>
    <SectionWrapper>
      <MyEducation/>
    </SectionWrapper>
    <SectionWrapper>
      <Skills/>
    </SectionWrapper>
    <SectionWrapper>
      <ContactSection/>
    </SectionWrapper>
  </>
   
  )
}

export default HomePage