import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './HomepageImage.css'

const HomepageImage = () => {
  return (
    <div className="homepage-box">
        <div className='text-end'>
            <div className="img">
              <Container className='homepage-img-container'>
                  <Image   
                    className= 'homepage-img' 
                    alt= 'Homepage Image' 
                    src="./src/assets/HomepageImage.png"
                    width='60%'
                  />
              </Container> 
            </div>
            <div className='msg'>
              <h2 className='welcome-msg'>Welcome to DePauw University</h2>
            </div>
        </div>
    </div> 
  );
}

export default HomepageImage;