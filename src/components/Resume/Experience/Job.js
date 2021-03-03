import React from 'react';

const Job = ({ data }) => (
    <article className="jobs-container">
        <header>
            <h4><a href={data.link}>{data.company}</a> - {data.position}</h4>
            <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
        </header>
        <ul className="points">
            {data.points.map((point) => (
                <li key={point}>{point}</li>
            ))}
        </ul>
    </article>
)

export default Job;