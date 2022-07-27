import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={IMG1}alt="" />
            <h3>TextUtils | Utility to Manipulte Your Text The Way You Want To</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/NekshanKumar/textutils" className='btn' target='_blank'>Github</a>
            <a href="https://nekshankumar.github.io/textutils/" className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={IMG1}alt="" />
            <h3>TextUtils</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/NekshanKumar/textutils" className='btn' target='_blank'>Github</a>
            <a href="https://nekshankumar.github.io/textutils/" className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={IMG1}alt="" />
            <h3>TextUtils</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/NekshanKumar/textutils" className='btn' target='_blank'>Github</a>
            <a href="https://nekshankumar.github.io/textutils/" className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={IMG1}alt="" />
            <h3>TextUtils</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/NekshanKumar/textutils" className='btn' target='_blank'>Github</a>
            <a href="https://nekshankumar.github.io/textutils/" className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={IMG1}alt="" />
            <h3>TextUtils</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/NekshanKumar/textutils" className='btn' target='_blank'>Github</a>
            <a href="https://nekshankumar.github.io/textutils/" className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={IMG1}alt="" />
            <h3>TextUtils</h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/NekshanKumar/textutils" className='btn' target='_blank'>Github</a>
            <a href="https://nekshankumar.github.io/textutils/" className='btn btn-primary' target='_blank' >Live Demo</a>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio