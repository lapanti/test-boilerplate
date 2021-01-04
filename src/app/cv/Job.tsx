import format from 'date-fns/format'
import locale from 'date-fns/locale/fi'
import React from 'react'
import styled from 'styled-components'

import Highlight from '../../components/Highlight'
import { durationToString } from '../../lib/duration'
import type { JobWithDuration } from '../../store/ducks/experience/slice'

const formatDate = (date: number) => format(date, 'M/yyyy', { locale })

const DT = styled.dt`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
`

const DD = styled.dd`
    margin: 0;
`

const DDHighlight = styled(Highlight).attrs({ as: 'dd' })`
    margin: 0;
`

const TechList = styled.ul`
    display: inline;
    list-style: none;
    padding-left: 0;
`

const Tech = styled.li`
    display: inline;

    & + &:before {
        content: ', ';
    }
`

interface JobProps {
    job?: JobWithDuration
}

const Job: React.FunctionComponent<JobProps> = ({ job }) =>
    !job ? null : (
        <dl>
            <DT>Company</DT>
            <DDHighlight>
                <strong>{job.companyName}</strong>
            </DDHighlight>
            <DT>Title</DT>
            <DDHighlight>{job.title}</DDHighlight>
            <DT>Duration</DT>
            <DDHighlight>
                <small>
                    from <time dateTime={format(job.startDate, 'yyyy-M')}>{formatDate(job.startDate)}</time>{' '}
                    {job.endDate ? (
                        <>
                            until <time dateTime={format(job.endDate, 'yyyy-M')}>{formatDate(job.endDate)}</time>
                        </>
                    ) : (
                        'onwards'
                    )}{' '}
                    ({durationToString(job.duration)})
                </small>
            </DDHighlight>
            <DT>Description</DT>
            <DD>{job.description}</DD>
            <br />
            <DT>Technologies used</DT>
            <DD>
                <TechList>
                    {job.techs.map((tech, i) => (
                        <Tech key={i}>{tech}</Tech>
                    ))}
                </TechList>
            </DD>
        </dl>
    )

export default Job
