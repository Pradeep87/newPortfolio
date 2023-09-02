import React from 'react'

const SectionWrapper = ({children}) => {
  return (
    <section className='content'>
      <div className='section'>{children}</div>
    </section>
  )
}

export default SectionWrapper