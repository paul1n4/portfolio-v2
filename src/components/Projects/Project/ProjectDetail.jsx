import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProjectDetail.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectDetail = ({project}) => {
  const {name, image, description, link, githubLink} = project
  const imagePath = require(`../../../assets/images/${image}.png`)
  return(
    <div className='project-detail'>
      <img src={imagePath} alt={name}/>
      <div className='project-info'>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={link} target='_blank' rel='noreferrer'>Visit Site</a>
        {githubLink === '' ? '' : (
          <a href={githubLink} target='_blank' rel='noreferrer' >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail