import './index.scss'
import { db } from '../../data/db'
import ProjectCollapse from './Project/ProjectCollapse'

const Projects = () => {
  return (
    <div className='container projects-page'>
      <h2>Projects</h2>
      <div className='projects-list'>
        {db.map(project => (
          <ProjectCollapse 
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <div className='spacer'></div>
    </div>
  )
}

export default Projects