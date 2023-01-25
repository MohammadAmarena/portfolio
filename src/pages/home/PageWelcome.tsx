import { Helmet } from 'react-helmet'
import { Key, useContext } from 'react'
import { AppContext } from '../../AppContext'
import './welcome.scss'
import myImage from '../../assets/images/me.jpeg'

export const PageWelcome = () => {
	const { person } = useContext(AppContext)
	
	return (
		<div className="page pageWelcome">
			<Helmet>
				<title>portfolio - Welcome</title>
			</Helmet>
			<div className="me">
				<p>Hi Lay</p>
				<div className="backName">Mohammad Amaren</div>
				{person.map((p, i: Key)=>    {
					return (
						<div className='welcome' key={i}>
							<div className="name">
								Im {p.firstName} {p.lastName}
							</div>
							<div className="title">
								FULL-STACK DEVELOPER
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
								<div className="face1">Innovative</div>
								<div className="face2">Creative</div>
								<div className="face3">Unbeatable</div>
								<div className="face4">Exceptional</div>
							</div>
						</div>
					</span>
				</h3>
			</div>
			<div className="image">
				<img src={myImage} alt="me" />
				<div className="description">
				A web developer who has a passion for technology, data reading and design
				I am enthusiastic and motivated to solve problems and ready for new challenges that I enjoy more
				</div>
			</div>
		</div>
	);
};