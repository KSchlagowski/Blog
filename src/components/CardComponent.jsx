import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";

const CardComponent = ({ content }) => {
  const { title, description, image } = content;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" as={Image} src={image} fluid={true} alt="Card image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;


