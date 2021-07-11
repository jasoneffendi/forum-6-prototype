import React from 'react'
import styles from './index.module.css'


const Scorebar = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.barContainer}>
                <div className={styles.teamContainer}>
                    <div className={styles.teamFlag}>
                        <img className={styles.teamFlagImg} src={props.teamLeftIcon} />
                    </div>
                    <div className={styles.teamTag}>
                        {props.teamLeftTag}
                    </div>
                </div>
                <div className={styles.scoreContainer}>
                    <div className={styles.teamLeftScore}>
                        {props.teamLeftScore}
                    </div>
                    <div className={styles.separator}>
                        -
                    </div>
                    <div className={styles.teamRightScore}>
                        {props.teamRightScore}
                    </div>
                </div>
                <div className={styles.teamContainerRight}>
                    <div className={styles.teamTag}>
                        {props.teamRightTag}
                    </div>
                    <div className={styles.teamFlag}>
                        <img className={styles.teamFlagImg} src={props.teamRightIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scorebar