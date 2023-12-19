import React, { FC } from 'react'
import styles from '../styles/FightScreen.module.css'
import classNames from 'classnames'
import heart from '../assets/images/heart.png'
import { ActionButtonData } from '../data/types'

interface Props {
    data: ActionButtonData
    isSelected: boolean
    setIsSelected: () => void
}

const ActionButton: FC<Props> = ({
    data,
    isSelected,
    setIsSelected,
}) => {

    const cx = classNames.bind(styles)

    return (
        <button className={cx(styles.action_button, isSelected && styles.selected_action)} onClick={() => setIsSelected()}>
            {
                isSelected ?
                    <img src={heart} alt="heart" />
                    :
                    <img src={data.icon} alt={data.title} />
            }
            {data.title}
        </button>
    )
}

export default ActionButton