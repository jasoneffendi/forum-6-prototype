import React from 'react'
import styles from './index.module.css'

import Scorebar from '../../components/Scorebar'
import Tabs from '../../components/Tabs'

import Discussions from './components/Discussions'


import ARGENTINA_ICON from '../../images/flags/argentina.png'
import BRAZIL_ICON from '../../images/flags/brazil.png'

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.topSection}>
                <div className={styles.header}>
                    Copa America
                </div>
                <div>
                    <Scorebar
                        teamRightScore='1'
                        teamRightIcon={ARGENTINA_ICON}
                        teamRightTag='ARG'
                        teamLeftScore='0'
                        teamLeftIcon={BRAZIL_ICON}
                        teamLeftTag='BRA'
                    />                    
                </div>
            </section>
            <section>
                <Tabs
                    defaultActive='Discussions'
                >
                    <div label='Wall'>
                        Wall
                    </div>
                    <div label='Scores'>
                        Scores
                    </div>
                    <div label='Discussions'>
                        <Discussions />
                    </div>
                </Tabs>
            </section>
        </div>
    )
}


export default Home