import React from 'react'
import './index.scss'

const SectionHeading = ({heading_title,heading_sub_title,className }) => {
  const titleClasses = `title ${className === 'white_color' ? 'white_color' : ''}`;
  return (
    <div id='section_heading'>
      <h6 className='sub_title'>{heading_sub_title}</h6>
      <h2 className={titleClasses}>{heading_title}</h2>
    
    </div>
  )
}

export default SectionHeading