import React from 'react'
import Resume from '../../resources/MATTHEW BURNS.pdf';

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>Built following a React tutorial to learn the basics of the framework. </p>
            <a href={Resume} download="MATTHEW BURNS.pdf">Resume</a>
        </React.Fragment>
    )
}

export default About;