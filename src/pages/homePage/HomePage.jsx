import {UserSection,PortfolioSection,MyEducation,Skills} from "../../pagesComponent/"
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
  </>
   
  )
}

export default HomePage