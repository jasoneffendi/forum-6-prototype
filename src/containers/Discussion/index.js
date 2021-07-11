import React, { useState } from 'react'
import { withRouter } from 'react-router'

import styles from './index.module.css'

import BRAZIL_ARGENTINA_ICON from '../../images/games/brazil-argentina.jpg'
import BRAZIL_ICON from '../../images/flags/brazil.png'
import ARGENTINA_ICON from '../../images/flags/argentina.png'
import JOHN_AVATAR from '../../images/avatar/john-avatar.png'

import BACK_ARROW from '../../images/icons/back-arrow.png'

import Scorebar from '../../components/Scorebar'

import DiscussionComment from './components/DiscussionComment'


const discussionData = {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON,
    teamRightScore: '1',
    teamRightIcon: ARGENTINA_ICON,
    teamRightTag: 'ARG',
    teamLeftScore: '0',
    teamLeftIcon: BRAZIL_ICON,
    teamLeftTag: 'BRA'
}

const discussionCommentsData = [
    {
        commentAuthor: 'John',
        commentContent: 'This game is awesome',
        commentAuthorIcon: JOHN_AVATAR
    },
    {
        commentAuthor: 'John',
        commentContent: 'This game is awesome',
        commentAuthorIcon: JOHN_AVATAR
    },
    {
        commentAuthor: 'John',
        commentContent: 'This game is awesome',
        commentAuthorIcon: JOHN_AVATAR
    },
    {
        commentAuthor: 'John',
        commentContent: 'This game is awesome',
        commentAuthorIcon: JOHN_AVATAR
    },
    {
        commentAuthor: 'John',
        commentContent: 'This game is awesome',
        commentAuthorIcon: JOHN_AVATAR
    },
    {
        commentAuthor: 'John',
        commentContent: 'This game is awesome',
        commentAuthorIcon: JOHN_AVATAR
    },
    {
        commentAuthor: 'John',
        commentContent: 'This game is awesome',
        commentAuthorIcon: JOHN_AVATAR
    },
    {
        commentAuthor: 'John',
        commentContent: 'This game is awesome',
        commentAuthorIcon: JOHN_AVATAR
    }
]

const Discussion = (props) => {
    const [discussionComments, setDiscussionsComments] = useState(discussionCommentsData)
    const [commentInput, setCommentInput] = useState('')
    // Fetch data
    const goBack = () => {
        props.history.goBack()
    }

    const sendComment = () => {
        const newComment = {
            commentAuthor: 'John',
            commentContent: commentInput,
            commentAuthorIcon: JOHN_AVATAR
        }
        setDiscussionsComments(prevValues => [...prevValues, newComment])
    }

    const onInputChange = (e) => {
        // e.preventDefault()
        if(e.key === 'Enter') {
            sendComment()    
        }
    }
    return (
        <div>
            <header className={styles.header}>
                <img
                    className={styles.backButton}
                    src={BACK_ARROW}
                    onClick={goBack}
                />
                <span>
                    {discussionData.discussionLabel}
                </span>
            </header>
            <section className={styles.scoreContainer}>
                <Scorebar
                    teamRightScore={discussionData.teamRightScore}
                    teamRightIcon={discussionData.teamRightIcon}
                    teamRightTag={discussionData.teamRightTag}
                    teamLeftScore={discussionData.teamLeftScore}
                    teamLeftIcon={discussionData.teamLeftIcon}
                    teamLeftTag={discussionData.teamLeftTag}
                />
            </section>
            <section>
                <iframe
                    className={styles.videoPlayer}
                    src="https://www.youtube.com/embed/6tLxv5EsszA"
                />
            </section>
            <section className={styles.discussionSection}>
                <div className={styles.discussionCommentList}>
                    {discussionComments.map(dc => (
                        <DiscussionComment
                            commentAuthor={dc.commentAuthor}
                            commentContent={dc.commentContent}
                            commentAuthorIcon={dc.commentAuthorIcon}
                        />
                    ))}
                </div>
            </section>
            <section className={styles.commentInputSection}>
                <input
                    value={commentInput}
                    onChange={e => setCommentInput(e.target.value)}
                    onKeyDown={e => onInputChange(e)}
                    className={styles.commentInput}
                />
                <div
                    onClick={sendComment}
                    className={styles.commentSend}
                >
                    Send
                </div>
            </section>
        </div>
    )
}

export default withRouter(Discussion)