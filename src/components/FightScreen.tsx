import React, { FC, useState } from 'react'

import styles from '../styles/FightScreen.module.css'
import ActionButton from './ActionButton'

const FightScreen: FC = () => {

    const [selectedAction, setSelectionAction] = useState<string>("HOME")

    return (
        <div className={styles.fight_screen}>
            <div className={styles.action_buttons}>
                <ActionButton
                    title="HOME"
                    isSelected={selectedAction === "HOME"}
                    setIsSelected={setSelectionAction}
                />
                <ActionButton
                    title="ABOUT"
                    isSelected={selectedAction === "ABOUT"}
                    setIsSelected={setSelectionAction}
                />
                <ActionButton
                    title="PROJECTS"
                    isSelected={selectedAction === "PROJECTS"}
                    setIsSelected={setSelectionAction}
                />
                <ActionButton
                    title="CONTACT"
                    isSelected={selectedAction === "CONTACT"}
                    setIsSelected={setSelectionAction}
                />
            </div>
        </div>
    )
}

export default FightScreen