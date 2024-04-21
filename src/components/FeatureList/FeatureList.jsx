import ListGroup from 'react-bootstrap/ListGroup';

const FeatureList = ({ features }) => {
  return (
    <ListGroup>
      {features.map((feature, index) => (
        <ListGroup.Item key={index}>
          {feature.text}
          {feature.icon && <img className="access-icon" src={feature.icon} alt="icon" />}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}


export default FeatureList;