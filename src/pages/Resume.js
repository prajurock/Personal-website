import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import { Link } from 'react-router-dom';
import Main from '../layout/Main';
import React from 'react';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const sections = [
    'Education',
    'Experience',
    'Skills',
    'Courses',
    'References',
];

const Resume = () => (
    <Main
        title="Resume"
        description="Prajwal Resume"
    >
        <article className="post" id="resume">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
                    <div className="link-container">
                        {sections.map((s) => (
                            <h4 key={s}>
                                <a href={`#${s.toLowerCase()}`}>{s}</a></h4>
                        ))}
                    </div>
                </div>
            </header>
            <Education data={degrees} />
            <Experience data={positions} />
        </article>
    </Main>
)
export default Resume;