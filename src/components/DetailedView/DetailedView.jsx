import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetailedView = ({ feature_type, feature_description }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{feature_type}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          {feature_description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DetailedView;