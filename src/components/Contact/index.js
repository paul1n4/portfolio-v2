import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBehance, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='container contact-page'>
      <h2>Contact Me</h2>
      <div className='contact-container'>
        <div className='contact-text'>
          <p>I'd love to hear from you! Whether you have a project in mind, a question about my work, or just want to connect. </p>
          <div className='contact-media'>
           
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/paulinevalero/'>
                <FontAwesomeIcon icon={faLinkedinIn} />
                <span>/linkedin</span>
                </a>
           
              <a target='_blank' rel='noreferrer' href='https://github.com/paul1n4'>
                <FontAwesomeIcon icon={faGithub} />
                <span>/github</span>
              </a>
          
              <a target='_blank' rel='noreferrer' href='https://www.behance.net/paulinevalero'>
                <FontAwesomeIcon icon={faBehance} />
                <span>/behance</span>
              </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact