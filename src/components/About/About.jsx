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
                <h3 className="q1"><strong>What is DeFind?</strong></h3>
                <p className="describe1"> DeFind is a community-driven app dedicated to enhancing accessibility awareness on the DePauw University campus. 
                    Our platform allows users to contribute and discover the locations of accessibility features in various buildings, 
                    making campus navigation more inclusive and informed.</p>
            </div>
        </div>
    )
}

export default About;