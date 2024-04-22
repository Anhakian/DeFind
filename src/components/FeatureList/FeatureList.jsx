import ListGroup from 'react-bootstrap/ListGroup';
import './FeatureList.css';
import Button from 'react-bootstrap/Button';

// const FeatureList = ({ features }) => {

const FeatureList = () => {
  return (
    <div className="feature-list-container">
      <p>Features available at this site</p>
    <ListGroup className="feature-list">
        <ListGroup.Item className="list-item">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          {/* {feature.text}
          {feature.icon && <img className="access-icon" src={feature.icon} alt="icon" />} */}
        </ListGroup.Item>
    </ListGroup>
      <div className='pls'>
        <p>DeFind and the DePauw community rely on your contribution! Want to be a contributor?</p>
        <Button> <style>background-color: #89BBFE</style>Contribute</Button>
      </div>
    </div>
  );
}


export default FeatureList;