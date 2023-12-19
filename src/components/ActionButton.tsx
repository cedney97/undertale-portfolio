import React, { FC, Dispatch, SetStateAction } from 'react'
import styles from '../styles/FightScreen.module.css'
import classNames from 'classnames'
import heart from '../assets/images/heart.png'

interface Props {
    title: string
    isSelected: boolean
    setIsSelected: Dispatch<SetStateAction<string>>
}

const ActionButton: FC<Props> = ({
    title,
    isSelected,
    setIsSelected
}) => {

    const cx = classNames.bind(styles)

    return (
        <div className={cx(styles.action_button, isSelected && styles.selected_action)} onClick={() => setIsSelected(title)}>
            <img src={heart} alt="heart" />
            {title}
        </div>
    )
}

export default ActionButton