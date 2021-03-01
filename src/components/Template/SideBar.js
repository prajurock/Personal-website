import { Link } from 'react-router-dom';
import React from 'react';

const { PUBLIC_URL } = process.env;

const SideBar = () => {
    return (
        <section id='sidebar'>
            <section id='intro'>
                <Link to="/" className="logo">
                    <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
                </Link>
                <header>
                    <h2> Prajwal Kumar Singh</h2>
                    <p><a href="mailto:prajwalsingh651@gmail.com">prajwalsingh651@gmail.com</a></p>
                </header>
            </section>

            <section className="blurb">
                <h2>About</h2>
                <p>Hi, I&apos;m Prajwal. I like building things.
                I am a <a href="https://www.iitism.ac.in/">IIT ISM Dhanbad</a> graduate and the co-founder and CTO of <a href="https://laalsa.com">Laalsa</a>. Before This I was
                at <a href="https://www.welthungerhilfe.org/">Welthungerhilfe</a>
                </p>
                <ul className="actions">
                    <li>
                        {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
                    </li>
                </ul>
            </section>

            <section id="footer">
                <p className="copyright">&copy; Prajwal Kumar Singh <Link to="/">prajwalsingh.com</Link>.</p>
            </section>

        </section>
    )
}

export default SideBar;