import Job from "./Experience/Job";
import React from 'react';

const Education = ({data}) => (
    <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {data.map((degree)=>(
        <Job
            data={degree}
            key={degree.school}
        />
    ))
    }
    </div>
);
export default Education;