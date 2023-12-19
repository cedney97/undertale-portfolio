import React from 'react'
import styles from '../styles/FightScreen.module.css'


const UserBar = () => {
    return (
        <div className={styles.user_bar}>
            <span>You</span>
            <span>LV 1</span>
            <div className={styles.hp_info}>
                <span>HP</span>
                <div className={styles.hp_bar}></div>
                <span>20 / 20</span>
            </div>
        </div>
    )
}

export default UserBar