import { Link } from 'react-router-dom';
import Main from '../layout/Main';
import React from 'react';

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
            <div className="title">
                <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
                <div className="link-container">
                {sections.map((s)=>(
                    <h4 key={s}>
                    <a href={`#${s.toLowerCase()}`}>{s}</a></h4>
                ))}
                </div>
            </div>
        </article>
    </Main>
)
export default Resume;