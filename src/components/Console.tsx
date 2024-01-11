import React, { FC, ReactNode } from 'react'
import styles from '../styles/FightScreen.module.css'

interface Props {
    selectedAction: ReactNode
}

const Console: FC<Props> = ({
    selectedAction
}) => {

    return (
        <article className={styles.console}>
            {selectedAction}
        </article>
    )
}

export default Console