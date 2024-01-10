import React, { FC, useEffect, useState } from 'react'
import styles from '../../styles/FightScreen.module.css'

import useSound from 'use-sound'
import { projectData } from '../../data/project_data'
import { ProjectDataPage } from '../../data/types'

const ProjectsConsole = () => {

    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0)

    const handlePageChange = () => {
        setCurrentPageIndex(() => currentPageIndex === 0 ? 1 : 0)
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, true)

        return () => {
            document.removeEventListener("keydown", handleKeyDown, true)
        }
    }, [])

    const handleKeyDown = (e: KeyboardEvent) => {
        e.stopPropagation()
        console.log("Ah")
    }

    return (
        <div className={styles.projects_console}>
            {projectData[currentPageIndex].projects.map((project, index) => {
                return (
                    <button key={project.title} className={styles.project_button}>* {project.title}</button>
                )
            })}
            <button onClick={handlePageChange} className={styles.project_button}>* {currentPageIndex === projectData.length - 1 ? "Previous" : "Next"} Page</button>
        </div>
    )
}

export default ProjectsConsole