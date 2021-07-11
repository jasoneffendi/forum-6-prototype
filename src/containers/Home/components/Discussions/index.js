import React from 'react'

import styles from './index.module.css'

import DiscussionItem from '../../../../components/DiscussionItem'

import BRAZIL_ARGENTINA_ICON from '../../../../images/games/brazil-argentina.jpg'


const discussions = [{
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}, {
    discussionLabel:'Discussion A',
    discussionSlug: 'discussion-a',
    discussionDetails:'This discussion is about the most recent game that happened',
    discussionIconImg: BRAZIL_ARGENTINA_ICON
}]

const Discussions = () => {
    return (
        <div className={styles.container}>
            <section className={styles.discussionList}>
                {discussions.map(d => (
                    <DiscussionItem
                        discussionLabel={d.discussionLabel}
                        discussionSlug={d.discussionSlug}
                        discussionDetails={d.discussionDetails}
                        discussionIconImg={d.discussionIconImg}
                    />
                ))}
            </section>
        </div>
    )
}

export default Discussions