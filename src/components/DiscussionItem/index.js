import React from 'react'
import { withRouter } from 'react-router'

import styles from './index.module.css'


const DiscusssionItem = (props) => {
    const onItemClick = () => {
        props.history.push('/discussion/' + props.discussionSlug)
    }
    return (
        <div className={styles.container} onClick={onItemClick}>
            <section className={styles.discussionIcon}>
                <img
                    className={styles.discussionIconImg}
                    src={props.discussionIconImg}
                />
            </section>
            <section className={styles.discussionDetails}>
                <div className={styles.discussionLabel}>
                    {props.discussionLabel}
                </div>
                <div className={styles.discussionDetails}>
                    {props.discussionDetails}
                </div>
            </section>
        </div>
    )
}

export default withRouter(DiscusssionItem)