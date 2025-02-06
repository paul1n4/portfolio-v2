import './index.scss'
import { db } from '../../data/db'
import ProjectCollapse from './Project/ProjectCollapse'
import { useState } from 'react'
import ProjectDetail from './Project/ProjectDetail'

const Projects = () => {
  const [isTrue, setTrue] = useState(false)

  return (
    <div className='container projects-page'>
      <h2>Projects</h2>
      {/* </div><div className='projects-list'> */}
      <div className={isTrue? 'projects-list-collapse' : 'projects-list-detail'}>
        {db.map(project => (
          isTrue ? (
            <ProjectCollapse 
              key={project.id}
              project={project}
            />
          ) : (
            <ProjectDetail 
              key={project.id}
              project={project}
            />
          )
        ))}
      </div>
      <div className='spacer'></div>
    </div>
  )
}

export default Projects