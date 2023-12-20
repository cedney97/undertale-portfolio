import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from '../styles/FightScreen.module.css'
import classNames from 'classnames'
import heart from '../assets/images/heart.png'
import { ActionButtonData } from '../data/types'

interface Props {
    data: ActionButtonData
    isSelected: boolean
    setSelectedIndex: Dispatch<SetStateAction<number>>
    isHovered: boolean
    setHoveredIndex: Dispatch<SetStateAction<number>>
    index: number
}

const ActionButton: FC<Props> = ({
    data,
    isSelected,
    setSelectedIndex,
    isHovered,
    setHoveredIndex,
    index
}) => {

    const handleClick = () => setSelectedIndex(index)
    const handleMouseEnter = () => setHoveredIndex(index)
    const handleMouseLeave = () => setHoveredIndex(-1)

    const cx = classNames.bind(styles)

    return (
        <button
            className={cx(styles.action_button, (isSelected || isHovered) && styles.selected_action)}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {
                (isSelected || isHovered) ?
                    <img src={heart} alt="heart" />
                    :
                    <img src={data.icon} alt={data.title} />
            }
            {data.title}
        </button>
    )
}

export default ActionButton