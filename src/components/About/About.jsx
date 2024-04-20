import Navbar from "../Navbar/Navbar";
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-title">
                <h2 className="a-title"><strong>About DeFind</strong></h2>
            </div>
            <div className="prob1">
                <h3 className="q"><strong>What is DeFind?</strong></h3>
                <p className="describe"> DeFind is a community-driven app dedicated to enhancing accessibility awareness on the DePauw University campus. 
                    Our platform allows users to contribute and discover the locations of accessibility features in various buildings, 
                    making campus navigation more inclusive and informed.
                </p>

                <h3 className="q"><strong>How to contribute to DeFind?</strong></h3>
                <p className="describe"> You can contribute to DeFind by referencing accessibility elements across the university campus.
                    The size and usefulness of our database rely on your active participation. 
                    The more features you reference, the more comprehensive and valuable our application becomes in aiding campus accessibility.
                </p>
                    <h5 className="steps"><strong>Step to Contribute:</strong></h5>
                    <p className="describe-step">1. Visit the <b>Contribute to DeFind</b> Section on the Navigation Bar</p>
                    <p className="describe-step">2. Submit the <b>New Accessibility Information Form</b> </p>
                        <p className="step2-describe">Fill out the form with detailed descriptions of the new accessibility elements you've discovered. Include information 
                            such as the type of feature (e.g., elevator, automatic door) and any relevant details about the surrounding area.
                            Your contributions help make DeFind a more inclusive and informative resource for all users.</p>
            </div>
        
        </div>
    )
}

export default About;