import { useState, createContext } from 'react'
import { IPerson, IProject, ISkills } from './interfaces'
import { personData, projectsData, skillsData, colorsData } from './data/person.js'
interface IAppContext {
    person: IPerson[],
    projects: IProject[];
    skills: ISkills[];
    colors: any;
}
interface IAppProvider {
    children: React.ReactNode
}

export const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    const [person, setPerson] = useState<IPerson[]>(personData)
    const [projects, setProjects] = useState<IProject[]>(projectsData)
    const [skills, setskills] = useState<ISkills[]>(skillsData)
    const [colors, setcolors] = useState<unknown>(colorsData)

    return (
        <AppContext.Provider value={{person, projects, skills, colors}}>
            {children}
        </AppContext.Provider>
    )
}