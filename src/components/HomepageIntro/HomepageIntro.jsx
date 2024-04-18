import HomepageImage from '../HomepageImage/HomepageImage';
import './HomepageIntro.css'

const HomepageIntro = () => {
    return (
        <div className='homepage-intro' id = "homepage-intro">
            <div className='homepage-title'>
                <h1><strong>DeFind</strong></h1>
                <p><h2>Find the accessibility options you need</h2></p>
            </div>
            <div className="homepage-image">
                <HomepageImage />
            </div>
        </div>
        
    );
}
export default HomepageIntro