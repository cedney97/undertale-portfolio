import React, { FC } from 'react'

interface Props {
    technologies: string[]
}

const TechnologiesList: FC<Props> = ({
    technologies
}) => {
    return <div>
        <u>Built with:</u>
        <ul>
            {technologies.map((tech, index) => {
                return <li key={index}>{tech}</li>
            })}
        </ul>
    </div>
}

export default TechnologiesList