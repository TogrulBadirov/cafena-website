import React from 'react'
import "./index.scss"

const HeroArea = () => {
    return (
        <section id='hero-area'>
            <div className="container">

                <div className="contents">
                    <div className="hero-content">
                        <h1>
                            Distinct
                            <br />
                            coffee aroma
                        </h1>
                        <p>
                            The coffee is brewed by first roasting the green coffee beans over hot
                            coals in a brazier. given an opportunity to sample.
                        </p>
                        <div>
                            <button className='testy'><span>TESTY COFFEE</span></button>
                            <button className='read-more'><span>READ MORE</span></button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="https://xpressrow.com/html/cafena/cafena/assets/images/hero/hero-img-2-1.png" alt="coffee" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroArea