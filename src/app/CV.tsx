import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Header from '../components/Header'
import Main from '../components/Main'
import type { Tech } from '../constants/jobs'
import {
    jobsArraySelector,
    statusSelector,
    techsSelector,
    totalExperienceSelector,
} from '../store/ducks/experience/selectors'
import experienceSlice from '../store/ducks/experience/slice'
import Job from './cv/Job'
import Technology from './cv/Technology'

const TechnologyList = styled.ul`
    list-style-type: none;
    padding: 0;
`

const CV: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const status = useSelector(statusSelector)
    const jobs = useSelector(jobsArraySelector)
    const techExperiences = useSelector(techsSelector)
    const totalExperience = useSelector(totalExperienceSelector)
    useEffect(() => {
        if (status === '') dispatch(experienceSlice.actions.initializeStart())
    }, [status, dispatch])
    return (
        <>
            <Header subtitle="what I have done" title="CV" />
            <Main>
                <p>
                    I started out as most people, doing websites in my early teens (I&apos;ll admit, my first ones were
                    with FrontPage) for my bands etc. I once even borrowed (and did all the exercises) from the library
                    a book that detailed the then popular HTML, PHP, MySQL stack, so a lot of the websites I did back
                    then used PHP on the level of <code>include</code>. Luckily I outgrew that and started dabbling in
                    jQuery and finally got a formal education as well.
                </p>
                <p>
                    That all lead into a (tech) master&apos;s degree in Information Networks from Aalto University,
                    where I majored in ICT in business (basically all the software courses I could find). Apart from
                    that I have accumulated some professional experience in the field
                    {totalExperience
                        ? ` (${totalExperience.years} years and ${totalExperience.months} months, to be exactish)`
                        : ''}
                    .
                </p>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'done' && (
                    <>
                        <h2>Technologies</h2>
                        <TechnologyList>
                            {Object.entries(techExperiences)
                                .sort()
                                .map(([key, duration], i) => (
                                    <Technology
                                        key={i}
                                        duration={duration}
                                        tech={key as Tech}
                                        totalExperience={totalExperience}
                                    />
                                ))}
                        </TechnologyList>

                        <h2>Jobs</h2>
                        {jobs.map((job, i) => (
                            <Job key={i} job={job} />
                        ))}

                        <h2>Other technologies</h2>
                        <p>
                            I have also used or dabbled with some other technologies, listed below, but I do not
                            consider myself fluent (or willing) to work with them professionally:{' '}
                        </p>
                        <TechnologyList>
                            <li>Docker</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>React Native</li>
                            <li>Android</li>
                            <li>And the list goes on and on</li>
                        </TechnologyList>
                    </>
                )}
            </Main>
        </>
    )
}

export default CV
