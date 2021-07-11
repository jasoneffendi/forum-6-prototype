import React from 'react'
import { withRouter } from 'react-router'

import styles from './index.module.css'


const DiscussionComment = (props) => {
    // const onItemClick = () => {
    //     props.history.push('/comment/' + props.commentSlug)
    // }
    return (
        <div className={styles.container}>
            <section className={styles.commentAuthor}>
                <img
                    className={styles.commentAuthorIcon}
                    src={props.commentAuthorIcon}
                />
            </section>
            <section className={styles.commentContent}>
                <div className={styles.commentAuthor}>
                    {props.commentAuthor}
                </div>
                <div className={styles.commentContent}>
                    {props.commentContent}
                </div>
            </section>
        </div>
    )
}

export default withRouter(DiscussionComment)