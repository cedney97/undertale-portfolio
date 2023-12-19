import React from 'react'
import styles from '../styles/FightScreen.module.css'
import DefaultConsole from './consoleDisplays/DefaultConsole'

const Console = () => {
    return (
        <article className={styles.console}>
            <DefaultConsole />
        </article>
    )
}

export default Console