import ListGroup from 'react-bootstrap/ListGroup';
import './FeatureList.css';
import Button from 'react-bootstrap/Button';

const FeatureList = () => {
  return (
    <div className="FeatureList">
      <div className='feature-list-container'>
        <ListGroup className="feature-list">
          <ListGroup.Item>Features available at this site</ListGroup.Item>
          <ListGroup.Item>Automatic Door</ListGroup.Item>
          <ListGroup.Item>Elevator</ListGroup.Item>
          <ListGroup.Item>Ramp</ListGroup.Item>
            {/* {feature.text}
            {feature.icon && <img className="access-icon" src={feature.icon} alt="icon" />} */}
          
        </ListGroup>
      </div>
      
      <div className='pls'>
        <p>DeFind and the DePauw community rely on your contribution! Want to be a contributor?</p>
        <Button className="contribute-button">Contribute</Button>
      </div>
    </div>
  );
}


export default FeatureList;