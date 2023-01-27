export interface IPerson {
    firstName: string;
    lastName: string;
    city: string;
    status: string;
    hobbys: string[];
    image: string;
    description: string;
}

export interface IProject {
    [x: string]: any;
    id: number;
    name: string;
    image: string;
    tags: string[];
    source_code: string;
    demo: string;
    description: string;
}
export interface ISkills {
    type: string;
    level: number;
}