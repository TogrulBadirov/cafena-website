import React from 'react'
import SectionHeading from '../../CommonComponents/SectionHeading'
import './index.scss'
import Slider from '../../CommonComponents/Slider'
const Testimonials = () => {
    return (
        <div id='testimonials'>
            <div className="container bottom_p top_p">
                <SectionHeading heading_sub_title="Testimonials" heading_title="OUR CUSTOMER REVIEW" className="white_color" />
                <Slider/>
            </div>
        </div>
    )
}

export default Testimonials