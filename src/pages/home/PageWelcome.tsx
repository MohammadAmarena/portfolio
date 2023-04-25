import { Helmet } from 'react-helmet'
import { Key, useContext } from 'react'
import { AppContext } from '../../AppContext'
import './welcome.scss'

export const PageWelcome = () => {
	const { person } = useContext(AppContext)

	return (
		<div className="page pageWelcome">
			<Helmet>
				<title>portfolio - Welcome</title>
			</Helmet>
			<div className="me">
				<p>Hi</p>
				<div className="backName">Mern Developer</div>
				{person.map((p, i: Key) => {
					return (
						<div className='welcome' key={i}>
							<div className="name">
								Im {p.firstName} {p.lastName}
							</div>
							<div className="title">
								FULL-STACK WEB DEVELOPER
								<div id="border"></div>
							</div>
						</div>
					)
				})}
			</div>
			<div className="home">
				<h3 id="resizing-h3" className="" >
					<span>
						<div className="stage">
							<div className="cubespinner">
								<div className="face4">Exceptional</div>
								<div className="face1">Innovative</div>
								<div className="face3">Unbeatable</div>
								<div className="face2">Creative</div>
							</div>
						</div>
					</span>
				</h3>
			</div>
			{person.map(p => {
				return (
					<div className="body">
					<div className="image">
						<img src={p.image} alt="me" />
					</div>
						<div className="description">
							{p.description}
						</div>
					</div>
				)
			})}
		</div>
	);
};