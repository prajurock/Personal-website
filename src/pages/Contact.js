import ContactIcons from '../components/contact/ContactIcons'
import { Link } from 'react-router-dom';
import Main from '../layout/Main'
import React from 'react';

const Contact = () => (
    <Main
        description={"Contact Prajwal Kumar Singh to Prajwalsingh651@gmai.com"}
    >


<article className="post" id="contact">
<header>
<div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
</header>
<div className="email-at">
        <p>Feel free to get in touch. You can email me at: <br></br>
        <a href='mailto:prajwalsingh651@gmail.com'>Prajwalsingh651@gmail.com</a>
        </p>
      </div>
      <ContactIcons />
</article>

    </Main>

)

export default Contact;