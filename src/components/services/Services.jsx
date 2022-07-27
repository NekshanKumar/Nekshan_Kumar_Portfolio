import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="services_container">

      {/*-----UI/UX DESIGN------*/}

        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Customer interactions, study, and analysis of company branding through creative briefs.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Help visualize the interaction patterns and interface behaviors.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Analyze and offer insights for the usability of the features and overall project.</p>
            </li>
          </ul>
        </article>

        {/*-----WEB DEVELOPMENT------*/}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Building web apps for efficient management of different business activities.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Applying smart automation to streamline workflows and integrate corporate systems together for coherent operation..</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Responsive Web Applications is the approach that suggests web Applications design and development should respond to the user’s request irrespective of device they use (mobile/ laptop/ desktop/ ipad).</p>
            </li>
          </ul>
        </article>

        {/*-----CONTENT CREATION------*/}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Deeply Understanding your content requirement and visualizing it.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating desireable content for your websites/web applications.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Editing the content as per your reques
              </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Providing help to your website/web application at any point  of time</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services