import React from 'react'

import styles from '../styles/FightScreen.module.css'

const CharacterDisplay = () => {

    const divs = []
    for (let i = 0; i < 12; ++i) {
        divs.push(<div key={i}></div>)
    }

    return (
        <div className={styles.grid}>
            {divs}
        </div>
    )
}

export default CharacterDisplay