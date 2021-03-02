import { Link } from 'react-router-dom'
import Main from "../layout/Main";
import React from "react";
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

const markdown = raw('../data/about.md');

const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

const LinkRenderer = ({ ...children }) => <Link {...children} />;


const About = () => (
    <Main
        title="About"
        description="Learn about Prajwal Kumar Singh">

        <article className="post markdown" id="about">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
                    <p>(in about {count} words)</p>
                </div>
            </header>
            <ReactMarkdown source={markdown} renderers={{
                Link: LinkRenderer,
            }} escapeHtml={false} />
        </article>
    </Main>


)

export default About;