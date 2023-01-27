import { Helmet } from "react-helmet";
import { Key, useContext } from 'react'
import { AppContext } from '../../AppContext'
import { IProject } from '../../interfaces'
import './projects.scss'

export const PageProjects = () => {
	const { person, projects } = useContext(AppContext)
	return (
		<div className="page pageProjects">
			<Helmet>
				<title>portfolio - Projects</title>
			</Helmet>
			{<div className="projects">
				{projects.map((project: IProject) => {
					return (
						<div className="project" key={project.id}>
							<div className="card">
								<div className='bg-image hover-overlay'>
									<a href={project.source_code}><img className='image' src={project.image} alt='...' /></a>
								</div>
								<div className='card-body'>
									<h2 className='title'>{project.name}</h2>
									<p className='description'>{project.description}</p>
									<div className="tags">
										{project.tags.map(tag => {
											return (
												<span className={tag === 'sass' ? 'redTag' : tag ===  'react' ? 'yellowTag' : tag ===  'html' ? 'orangeTag' : 'blueTag'}>{tag}</span>
											)
										})}
									</div>
									<div className="links">
										<a href={project.source_code}><i className="fa-brands fa-github fa-2x"></i></a>
										<a href={project.demo}>{project.demo.length > 5 ? <i className="fa-solid fa-globe fa-2x"></i> : ''}</a>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>}
		</div>
	);
};