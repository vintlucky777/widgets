import React from 'react'
import _ from 'lodash'
import cs from 'classnames'
import styles from './progress-bar.module.css'

export default function ProgressBar({ progress=0, color, animated=false, className, ...props }) {
    return (
        <div className={cs(styles.bg, className)} {...props}>
            <div className={cs(styles.bar, animated && styles.barAnimated)} style={{ transform: `translate3d(${_.round(100 * (-1+progress), 2)}%, 0, 0)`, backgroundColor: color }}></div>
        </div>
    )
}
