import {UserSection,PortfolioSection} from "../../pagesComponent/"
import { SectionWrapper } from '../../layout'



const HomePage = () => {
  return (<>
   <SectionWrapper>
      <UserSection />
    </SectionWrapper>
    <SectionWrapper>
      <PortfolioSection/>
    </SectionWrapper>
  </>
   
  )
}

export default HomePage