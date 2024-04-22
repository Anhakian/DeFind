import ListGroup from 'react-bootstrap/ListGroup';
import './FeatureList.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const FeatureList = () => {
  return (
    <div className="FeatureList">
      <div className='feature-list-container'>
        <ListGroup className="feature-list">
          <ListGroup.Item>Features available at this site</ListGroup.Item>
          <ListGroup.Item>
            <img src={`../../src/assets/markers/AutomaticDoor.png`} alt="Automatic Door" className="feature-icon"/>
            Automatic Door
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={`../../src/assets/markers/Elevator icon.png`} alt="Elevator" className="feature-icon"/>
            Elevator
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={`../../src/assets/markers/Ramp icon.png`} alt="Ramp" className="feature-icon"/>
            Ramp
          </ListGroup.Item>
          
        </ListGroup>
      </div>
      
      <div className='pls'>
        <p>DeFind and the DePauw community rely on your contribution! Want to be a contributor?</p>
        <Link to="/contribute">
          <Button className="contribute-button">Contribute</Button>
        </Link>
      </div>
    </div>
  );
}


export default FeatureList;