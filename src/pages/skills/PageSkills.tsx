import { Helmet } from "react-helmet";
import "./skills.scss";
import SkillBar from "react-skillbars";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../AppContext";


export const PageSkills = () => {
	const { skills, colors } = useContext(AppContext)
	return (
		<div className="page pageSkills">
			<Helmet>
				<title>portfolio - Skills</title>
			</Helmet>
			<div className="skill-head">
				<motion.div
					className="skills"
					drag
					dragConstraints={{ left: 0, right: 300 }}
					dragElastic={0.2}
				>
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 3, duration: 1.5 }}
					>
						skills
					</motion.h2>
					<div className="skills-container">
						<SkillBar
							skills={skills}
							colors={colors}
							animationDuration={4000}
							animationDelay={1500}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};